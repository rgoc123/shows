import { combineReducers } from 'redux';

import venues from './venues_reducer';
import shows from './shows_reducer';

export default combineReducers({
  venues,
  shows
});
