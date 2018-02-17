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
  window.$ = $;

  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    delete window.currentUser;
  } else {
    store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  }

  ReactDOM.render(<Root store={ store } />, root);
});
