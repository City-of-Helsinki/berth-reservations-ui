import { combineReducers } from 'redux';
import ApplicationReducers from './ApplicationReducers';
import BerthReducers from './BerthReducers';
import FormReducers from './FormReducers';

export default combineReducers({
  berths: BerthReducers,
  forms: FormReducers,
  application: ApplicationReducers
});
