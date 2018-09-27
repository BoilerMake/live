import cookie from 'react-cookie';
import jwt_decode from 'jwt-decode';
import ReactGA from 'react-ga';
import apiFetch, { recordStatEvent } from './index';
import { toastr } from 'react-redux-toastr';

// CONSTANTS
export const LOGIN_FROM_JWT_SUCCESS = 'LOGIN_FROM_JWT_SUCCESS';
export const REQUEST_ME = 'REQUEST_ME';
export const RECEIVE_ME = 'RECEIVE_ME';
export const RECEIVE_PROJECT_DETAILS = 'RECEIVE_PROJECT_DETAILS';
export const SHOW_GITHUB_EMAIL_ERROR_MESSAGE =
  'SHOW_GITHUB_EMAIL_ERROR_MESSAGE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_ME = 'UPDATE_ME';

// ACTIONS
export function loginFromJWT(token) {
  cookie.save('token', token, { path: '/' });
  return dispatch => {
    let userId = jwt_decode(token).user_id;
    //when we've authenticated, let's associate the user_id (which lives inside the jwt) with GA
    ReactGA.set({ userId });
    dispatch(saveToken(token));
    setTimeout(() => {
      dispatch(fetchMe());
    }, 50);
  };
}

export function logoutUser() {
  return function(dispatch) {
    dispatch({ type: LOGOUT_USER });
    window.FS.identify(false);
    cookie.remove('token', { path: '/' });
  };
}

export function fetchMe() {
  return (dispatch, getState) => {
    dispatch(requestMe());

    return apiFetch('users/me')
      .then(response => response.json())
      .then(json => {
        window.FS.identify(json.data.id, {
          email: json.data.email
        });
        dispatch(receiveMe(json));
      });
  };
}

export function updateMe(me) {
  return dispatch => {
    return apiFetch('users/me', {
      method: 'PUT',
      body: JSON.stringify(me)
    })
      .then(response => response.json())
      .then(json => {
        if (json.success)
          toastr.success('Success!', 'Your profile has been saved');
        dispatch(fetchMe());
      });
  };
}

export function recordEvent(event, subtitle, context) {
  return (dispatch, getState) => {
    return recordStatEvent(event, subtitle, context);
  };
}

export function authUserWithGithub(code) {
  return dispatch => {
    return apiFetch(`users/auth/github/${code}`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          let { token, action, username } = json.data;
          if (token) {
            let messagePrefix;
            if (action === 'link') {
              messagePrefix = `linked`;
            } else if (action === 'login') {
              messagePrefix = `logged in using`;
            } else if (action === 'create') {
              messagePrefix = `created an account using`;
            }
            toastr.success(
              'Success!',
              `${messagePrefix} github account ${username}`
            );
            dispatch(loginFromJWT(token));
          }
        } else {
          toastr.error('Error', json.message);
          dispatch(showGitHubEmailErrorMessage());
        }
      });
  };
}

export function confirmEmail(code) {
  return dispatch => {
    return apiFetch(`users/verify/${code}`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          let { token, message } = json.data;
          toastr.success('Success!', message);
          dispatch(loginFromJWT(token));
        } else {
          toastr.error('Error', json.message);
        }
      });
  };
}

export function fetchTeamProjectDetails() {
  return (dispatch, getState) => {
    return apiFetch('users/project')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveProjectDetails(json));
      });
  };
}

// TO REDUCER
function saveToken(token) {
  return {
    type: LOGIN_FROM_JWT_SUCCESS,
    token: token
  };
}

function requestMe() {
  return {
    type: REQUEST_ME
  };
}

function receiveMe(json) {
  if ('error' in json) {
    json = null;
  }
  return {
    type: RECEIVE_ME,
    me: json,
    receivedAt: Date.now()
  };
}

function showGitHubEmailErrorMessage() {
  return {
    type: SHOW_GITHUB_EMAIL_ERROR_MESSAGE
  };
}

function receiveProjectDetails(json) {
  return {
    type: RECEIVE_PROJECT_DETAILS,
    teamProjectDetails: json
  };
}
