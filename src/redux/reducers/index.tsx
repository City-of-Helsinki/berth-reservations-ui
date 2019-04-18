import { combineReducers } from 'redux';
import BerthReducers from './BerthReducers';
import FormReducers from './FormReducers';
import UIReducers from './UIReducers';

export default combineReducers({
  berths: BerthReducers,
  forms: FormReducers,
  ui: UIReducers
});
