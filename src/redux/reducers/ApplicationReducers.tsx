import { Record } from 'immutable';
import { APPLICATION_OPTIONS } from '../../constants/UIConstants';
import { Action, ApplicationFactory, ApplicationState } from '../types';

const defaultState: ApplicationFactory = Record({
  selectedApplicationType: APPLICATION_OPTIONS.NEW_APPLICATION
});

export default (state: ApplicationState = defaultState(), action: Action): ApplicationState => {
  const { type, payload } = action;

  switch (type) {
    case 'APPLICATION.SWITCH_APPLICATION':
      return state.set('selectedApplicationType', payload);
    case 'APPLICATION.RESET_APPLICATION':
      return defaultState();
    default:
      return state;
  }
};
