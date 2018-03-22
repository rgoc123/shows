import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateFilter } from '../../actions/filters_actions';

import ShowsFilterForm from './shows_filter_form';

const mSTP = state => {
  return {

  };
};

const mDTP = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(mSTP, mDTP)(ShowsFilterForm);
