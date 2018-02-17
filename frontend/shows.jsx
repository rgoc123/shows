import React from 'react';
import ReactDOM from 'react-dom';

import { signup, login, logout } from './util/session_api_util';

import configureStore from './store/store';
import Root from './components/root';

//TESTING START
window.signup = signup;
window.login = login;
window.logout = logout;
//TESTING END

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
// we don't put the store directly on the window because
// it can be confusing when debugging, sometimes giving you access to state
// when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
