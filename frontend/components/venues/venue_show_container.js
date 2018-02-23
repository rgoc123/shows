import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import VenueShow from './venue_show';

export const mSTP = (state, ownProps) => {
  return {
    venue: state.entities.venues[ownProps.match.params.venueId],
    currentUser: state.session.currentUser
  };
};

export const mDTP = (dispatch) => {
  return {
    fetchVenue: id => dispatch(fetchVenue(id))
  };
};

export default withRouter(connect(mSTP, mDTP)(VenueShow));
