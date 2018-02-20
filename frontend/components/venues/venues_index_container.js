import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchVenues } from '../../actions/venues_actions';

import VenuesIndex from './venues_index';

const mapStateToProps = (state) => {
  return {
    venues: Object.values(state.entities.venues)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVenues: () => dispatch(fetchVenues())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenuesIndex);
