import * as APIUtilShows from '../util/show_api_util';

export const RECEIVE_SHOWS = 'RECEIVE_SHOWS';
export const RECEIVE_SHOW = 'RECEIVE_SHOW';

// Actions
export const receiveShows = shows => {
  return {
    type: RECEIVE_SHOWS,
    shows
  };
};

export const receiveShow = show => {
  return {
    type: RECEIVE_SHOW,
    show
  };
};

// Thunks
<<<<<<< HEAD
export const fetchShows = (filters) => dispatch => {
  return (
    APIUtilShows.fetchShows(filters).then(shows => (
=======
export const fetchShows = () => dispatch => {
  return (
    APIUtilShows.fetchShows().then(shows => (
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
      dispatch(receiveShows(shows))
    ))
  );
};

export const fetchShow = id => dispatch => {
  return (
    APIUtilShows.fetchShow(id).then(show => (
      dispatch(receiveShow(show))
    ))
  );
};
