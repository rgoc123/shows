import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
<<<<<<< HEAD
import uiReducer from './ui_reducer';
=======
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
<<<<<<< HEAD
  ui: uiReducer,
=======
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
  errors: errorsReducer
});

export default rootReducer;
