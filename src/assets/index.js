import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/index.scss';
import 'react-redux-toastr/src/styles/index.scss'
import cookie from 'react-cookie';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import { loginFromJWT } from './actions/users';
import GoogleAnalytics from 'react-ga';
import { GOOGLE_ANALYTICS_ID, DEBUG_MODE, SENTRY_URL } from './config';

GoogleAnalytics.initialize(GOOGLE_ANALYTICS_ID,{debug: DEBUG_MODE});
import Raven from 'raven-js';
Raven.config(SENTRY_URL).install();

let originalConsoleError = console.error;
console.error = function(message, error) {
    Raven.captureException(error);
    originalConsoleError.apply(this, arguments);
};
const store = configureStore();

const token = cookie.load('token');
// if (token) store.dispatch({ type: 'LOGIN_FROM_JWT_SUCCESS', token });//log us in from cookie
if (token) store.dispatch(loginFromJWT(token));//log us in from cookie


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('boilermake')
);
registerServiceWorker();
