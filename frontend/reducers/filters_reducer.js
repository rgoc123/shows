import merge from 'lodash/merge';

import { UPDATE_FILTER } from '../actions/filters_actions';

const defaultFilters = Object.freeze({
  date: "",
  now: false,
  soon: false,
  later: false
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;
