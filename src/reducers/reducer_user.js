import {
  LOGIN_FROM_JWT_SUCCESS,
  RECEIVE_ME,
  REQUEST_ME,
  LOGOUT_USER,
  SHOW_GITHUB_EMAIL_ERROR_MESSAGE
} from '../actions/users';

import jwtDecode from 'jwt-decode';

const INITIAL_STATE = {
  authenticated: false,
  isHacker: false,
  isExec: false,
  me: null,
  error: null,
  loading: false,
  token: null,
  showGithubEmailErrorMessage: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_FROM_JWT_SUCCESS:
      let token_data = jwtDecode(action.token);
      let isHacker = false,
        isExec = false;
      if (token_data.roles) {
        isHacker = token_data.roles.includes('hacker');
        isExec = token_data.roles.includes('exec');
      }
      return {
        ...state,
        authenticated: true,
        error: null,
        loading: false,
        isHacker,
        isExec,
        token: action.token
      };
    case LOGOUT_USER:
      return INITIAL_STATE;
    case REQUEST_ME:
      return { ...state, loading: true };
    case RECEIVE_ME:
      //todo: error checking
      return {
        ...state,
        loading: false,
        me: action.me.data
      };
    case SHOW_GITHUB_EMAIL_ERROR_MESSAGE:
      return {
        ...state,
        showGithubEmailErrorMessage: true
      };
    default:
      return state;
  }
}
