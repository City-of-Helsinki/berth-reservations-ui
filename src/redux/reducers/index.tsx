import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import ApplicationReducers from './ApplicationReducers';
import BerthReducers from './BerthReducers';
import FormReducers from './FormReducers';
import StepReducers from './StepReducers';
import WinterAreaReducers from './WinterAreaReducers';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    berths: BerthReducers,
    winterAreas: WinterAreaReducers,
    forms: FormReducers,
    application: ApplicationReducers,
    steps: StepReducers
  });
