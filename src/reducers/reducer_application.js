import {
  RECEIVE_APPLICATION,
  REQUEST_APPLICATION,
  RECEIVE_SCHOOL_LIST,
  START_RESUME_UPLOAD,
  FINISH_RESUME_UPLOAD,
  RESUME_UPLOAD_PROGRESS,
  CHANGE_APPLICATION_FIELD_VALUE,
  TOGGLE_APPLICATION_FIELD_VALUE
} from '../actions/application';

export const INITIAL_STATE = {
  applicationForm: {},
  validation: { reason_label: [], reason_field: [] },
  error: null,
  loading: true,
  uploadProgress: 0,
  isResumeUploading: false,
  uploadingFileName: null,
  schools: []
};

export default function(state = INITIAL_STATE, action) {
  let { field, value } = action;

  switch (action.type) {
    case REQUEST_APPLICATION:
      return { ...state, loading: true };
    case RECEIVE_APPLICATION:
      //todo: error checking
      if (!action.json.data) {
        return state;
      }

      let { applicationForm, validation } = action.json.data;
      if (action.onlyUpdateNonFormFields) {
        let {
          completed,
          resume_filename,
          resume_get_url,
          resume_put_url,
          resume_uploaded,
          is_rsvp_confirmed
        } = applicationForm;
        //we only want to update these applicationForm state keys, so we don't disrupt  user currently typing by
        // giving the UI stale data (i think this make sense?)
        return {
          ...state,
          loading: false,
          validation,
          applicationForm: {
            ...state.applicationForm,
            completed,
            resume_filename,
            resume_get_url,
            resume_put_url,
            resume_uploaded,
            is_rsvp_confirmed
          }
        };
      } else {
        return {
          ...state,
          loading: false,
          validation,
          applicationForm: {
            ...applicationForm,
            //coalesce 1/0 to true/false
            isFirstHackathon: !!applicationForm.isFirstHackathon
          }
        };
      }
    case RECEIVE_SCHOOL_LIST:
      return {
        ...state,
        schools: action.json.data
      };
    case START_RESUME_UPLOAD:
      return {
        ...state,
        isResumeUploading: true,
        uploadProgress: 0,
        uploadingFileName: action.fileName
      };
    case FINISH_RESUME_UPLOAD:
      return {
        ...state,
        isResumeUploading: false,
        uploadProgress: 100,

        applicationForm: {
          ...state.applicationForm,
          resume_uploaded: true,
          resume_filename: action.fileName
        }
      };
    case RESUME_UPLOAD_PROGRESS:
      return { ...state, uploadProgress: action.progress };

    case CHANGE_APPLICATION_FIELD_VALUE:
      return {
        ...state,
        applicationForm: {
          ...state.applicationForm,
          [field]: value
        }
      };
    case TOGGLE_APPLICATION_FIELD_VALUE:
      let oldValue = state.applicationForm[field];
      return {
        ...state,
        applicationForm: {
          ...state.applicationForm,
          [field]: !oldValue
        }
      };
    default:
      return state;
  }
}
