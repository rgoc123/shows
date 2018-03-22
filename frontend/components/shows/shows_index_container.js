import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShows } from '../../actions/shows_actions';

import ShowsIndex from './shows_index';

const mSTP = (state) => {
  return {
    shows: Object.values(state.entities.shows)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchShows: () => dispatch(fetchShows())
  };
};

export default connect(mSTP, mDTP)(ShowsIndex);
