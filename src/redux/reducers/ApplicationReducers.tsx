import { Record } from 'immutable';
import { APPLICATION_OPTIONS } from '../../constants/ApplicationConstants';
import { Action, ApplicationFactory, ApplicationState } from '../types';

const defaultState: ApplicationFactory = Record({
  selectedApplicationType: APPLICATION_OPTIONS.NEW_APPLICATION,
  berthSwitch: {
    harborId: '',
    berthNumber: ''
  }
});

export default (state: ApplicationState = defaultState(), action: Action): ApplicationState => {
  const { type, payload } = action;

  switch (type) {
    case 'APPLICATION.SWITCH_APPLICATION':
      return state.set('selectedApplicationType', payload);
    case 'APPLICATION.SUBMIT_FORM':
      return state.set('berthSwitch', payload);
    case 'APPLICATION.RESET_APPLICATION':
      return defaultState();
    default:
      return state;
  }
};
