import { RECEIVE_VENUES, RECEIVE_VENUE } from '../actions/venues_actions';

import merge from 'lodash/merge';

const venuesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VENUES:
      return action.venues;
    case RECEIVE_VENUE:
      return merge({}, state, {[action.venue.id]: action.venue});
    default:
      return state;
  }
};

export default venuesReducer;
