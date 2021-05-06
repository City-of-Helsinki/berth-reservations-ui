import { combineReducers } from 'redux';

import berthReducers from './berthReducers';
import berthSwitchReducers from './berthSwitchReducers';
import formReducers from './formReducers';
import winterAreaReducers from './winterAreaReducers';

export default combineReducers({
  berthSwitch: berthSwitchReducers,
  berths: berthReducers,
  forms: formReducers,
  winterAreas: winterAreaReducers,
});
