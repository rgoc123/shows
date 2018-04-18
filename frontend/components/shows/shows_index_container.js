import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShows } from '../../actions/shows_actions';

import ShowsIndex from './shows_index';


const mapStateToProps = (state) => {
  return {
    shows: Object.values(state.entities.shows)
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchShows: () => dispatch(fetchShows())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsIndex);
