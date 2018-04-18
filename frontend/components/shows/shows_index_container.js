import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShows } from '../../actions/shows_actions';

import ShowsIndex from './shows_index';

<<<<<<< HEAD
const mSTP = (state) => {
=======
const mapStateToProps = (state) => {
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
  return {
    shows: Object.values(state.entities.shows)
  };
};

<<<<<<< HEAD
const mDTP = (dispatch) => {
=======
const mapDispatchToProps = (dispatch) => {
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
  return {
    fetchShows: () => dispatch(fetchShows())
  };
};

<<<<<<< HEAD
export default connect(mSTP, mDTP)(ShowsIndex);
=======
export default connect(mapStateToProps, mapDispatchToProps)(ShowsIndex);
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
