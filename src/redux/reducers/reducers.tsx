import { combineReducers } from 'redux';

import BerthReducers from './BerthReducers';
import BerthSwitchReducers from './BerthSwitchReducers';
import FormReducers from './FormReducers';
import WinterAreaReducers from './WinterAreaReducers';

export default combineReducers({
  berthSwitch: BerthSwitchReducers,
  berths: BerthReducers,
  forms: FormReducers,
  winterAreas: WinterAreaReducers,
});
