import apiFetch from './index';
import { toastr } from 'react-redux-toastr';
import { recordStatEvent } from './index';

export const REQUEST_APPLICATION = 'REQUEST_APPLICATION';
export const RECEIVE_APPLICATION = 'RECEIVE_APPLICATION';

export function fetchApplication() {
  return dispatch => {
    dispatch(requestApplication());
    return apiFetch('users/me/application')
      .then(response => response.json())
      .then(json => dispatch(receiveApplication(json)));
  };
}

function requestApplication() {
  return {
    type: REQUEST_APPLICATION
  };
}

function receiveApplication(json, onlyUpdateNonFormFields = false) {
  if ('error' in json) {
    json = null;
  }
  return {
    type: RECEIVE_APPLICATION,
    json,
    onlyUpdateNonFormFields
  };
}

export function saveApplication(suppressToast = false, isRSVPAction = false) {
  return (dispatch, getState) => {
    let data = getState().application.applicationForm;
    return apiFetch('users/me/application', {
      method: 'PUT',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          if (!suppressToast) {
            if (isRSVPAction)
              toastr.success('Success!', 'Your RSVP has been saved.');

            if (json.data.applicationForm.completed)
              toastr.success('Saved!', json.data.message);
            else toastr.warning('Saved!', json.data.message);
          }
          //this api endpoint returns the updated application
          dispatch(receiveApplication(json, true));
        } else {
          //something broke, rehydrate the store with fresh application to be safe
          dispatch(fetchApplication());
        }
      });
  };
}

/*
 * Callback from Dropzone
 */
export function onResumeDrop(accepted, rejected) {
  return dispatch => {
    if (rejected.length > 0) {
      toastr.error('Upload error', 'Resume must be a PDF');
      console.log('wrong filetype');
      recordStatEvent('resumeUploadError', null, { rejected });
      return;
    } else if (accepted.length !== 1) {
      toastr.error('Upload error', 'Please try again');
      recordStatEvent('resumeUploadError', null, { accepted });
      console.log('err');
      return;
    }
    dispatch(initResumeUpload(accepted[0]));
  };
}

/*
 * Resume Redux XHR Black Magic :)
 */
function initResumeUpload(file) {
  return (dispatch, getState) => {
    let URL = getState().application.applicationForm.resume_put_url;
    let fileName = file.name;
    dispatch(startResumeUpload(fileName));
    /*
         * fetch doesn't let us get progress information, so we need to use vanilla XHR
         */
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
      let { status } = xhr;
      dispatch(finishResumeUpload(fileName, status));
    };

    xhr.upload.addEventListener('progress', e => {
      dispatch(resumeUploadProgress(e));
    });

    let fd = new FormData();
    fd.append('Content-Type', file.type);
    fd.append('file', file);
    xhr.open('PUT', URL);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(fd);
  };
}

export const START_RESUME_UPLOAD = 'START_RESUME_UPLOAD';
export const FINISH_RESUME_UPLOAD = 'FINISH_RESUME_UPLOAD';
export const RESUME_UPLOAD_PROGRESS = 'RESUME_UPLOAD_PROGRESS';

function startResumeUpload(fileName) {
  return dispatch => {
    toastr.info('Hang tight!', `Uploading ${fileName}`);
    dispatch({
      type: START_RESUME_UPLOAD,
      fileName
    });
  };
}

function finishResumeUpload(fileName, status) {
  return dispatch => {
    let success = status === 200;

    dispatch({
      type: FINISH_RESUME_UPLOAD,
      fileName
    });

    if (success) {
      dispatch(saveApplication(true));
      toastr.success('Resume Upload Success', `Uploaded ${fileName}`);
    } else {
      //todo: ??
      toastr.error('Oops!', 'Something went wrong... try again');
    }
    recordStatEvent('resumeUploadFinished', null, {
      success,
      fileName,
      status
    });
  };
}

function resumeUploadProgress(event) {
  let progress = (event.loaded / event.total) * 100;
  return {
    type: RESUME_UPLOAD_PROGRESS,
    progress
  };
}

/*
 * Normal application field stuff
 */
export const CHANGE_APPLICATION_FIELD_VALUE = 'CHANGE_APPLICATION_FIELD_VALUE';
export function changeApplicationFieldValue(field, value) {
  return {
    type: CHANGE_APPLICATION_FIELD_VALUE,
    field,
    value
  };
}
export const TOGGLE_APPLICATION_FIELD_VALUE = 'TOGGLE_APPLICATION_FIELD_VALUE';
export function toggleApplicationFieldValue(field) {
  return {
    type: TOGGLE_APPLICATION_FIELD_VALUE,
    field
  };
}

export const REQUEST_SCHOOL_LIST = 'REQUEST_SCHOOL_LIST';
export const RECEIVE_SCHOOL_LIST = 'RECEIVE_SCHOOL_LIST';

export function fetchSchoolList() {
  return dispatch => {
    dispatch(requestSchoolList());
    return apiFetch('schools')
      .then(response => response.json())
      .then(json => dispatch(receiveSchoolList(json)));
  };
}

function requestSchoolList() {
  return {
    type: REQUEST_SCHOOL_LIST
  };
}

function receiveSchoolList(json) {
  return {
    type: RECEIVE_SCHOOL_LIST,
    json
  };
}
