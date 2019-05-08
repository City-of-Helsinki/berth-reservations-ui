import { combineReducers } from 'redux';
import BerthReducers from './BerthReducers';
import FormReducers from './FormReducers';
import WinterAreaReducers from './WinterAreaReducers';

export default combineReducers({
  berths: BerthReducers,
  winterAreas: WinterAreaReducers,
  forms: FormReducers
});
