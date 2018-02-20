import * as APIUtilVenues from '../util/venue_api_util';

export const RECEIVE_VENUES = 'RECEIVE_VENUES';
export const RECEIVE_VENUE = 'RECEIVE_VENUE';

//actions
export const receiveVenues = venues => {
  return {
    type: RECEIVE_VENUES,
    venues
  };
};

export const receiveVenue = venue => {
  return {
    type: RECEIVE_VENUE,
    venue
  };
};

//thunks
export const fetchVenues = () => dispatch => {
  return (
    APIUtilVenues.fetchVenues().then(venues => (
      dispatch(receiveVenues(venues))
    ))
  );
};

export const fetchVenue = id => dispatch => {
  return (
    APIUtilVenues.fetchVenue(id).then(venue => (
      dispatch(receiveVenue(venue))
    ))
  );
};
