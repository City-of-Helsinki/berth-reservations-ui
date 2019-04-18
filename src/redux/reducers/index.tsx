import { combineReducers } from 'redux';
import BerthReducers from './BerthReducers';
import FormReducers from './FormReducers';

export default combineReducers({
  berths: BerthReducers,
  forms: FormReducers
});
