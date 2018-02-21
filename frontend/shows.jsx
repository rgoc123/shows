import React from 'react';
import ReactDOM from 'react-dom';

import { signup, login, logout } from './util/session_api_util';
import { fetchVenues, fetchVenue } from './actions/venues_actions';
import { fetchShows, fetchShow } from './util/show_api_util';

import configureStore from './store/store';
import Root from './components/root';

//TESTING START
window.signup = signup;
window.login = login;
window.logout = logout;
window.fetchVenues = fetchVenues;
window.fetchVenue = fetchVenue;
window.fetchShows = fetchShows;
window.fetchShow = fetchShow;
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
