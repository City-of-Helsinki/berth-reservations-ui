import { combineReducers } from 'redux';

import berthReducers from './berthReducers';
import formReducers from './formReducers';
import winterAreaReducers from './winterAreaReducers';

export default combineReducers({
  berths: berthReducers,
  forms: formReducers,
  winterAreas: winterAreaReducers,
});
