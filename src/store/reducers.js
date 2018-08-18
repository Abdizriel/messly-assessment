import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import shifts from './shifts/shifts.reducer';

const rootReducer = combineReducers({
  routing,
  shifts,
});

export default rootReducer;
