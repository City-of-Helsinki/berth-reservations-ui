import { Record } from 'immutable';

import { ApplicationOptions } from '../../types/applicationType';
import { Action, ApplicationFactory, ApplicationProps, ApplicationState } from '../types';

const initState: ApplicationProps = {
  berthsApplicationType: ApplicationOptions.NewApplication,
  berthSwitch: {
    harborId: '',
    pier: '',
    berthNumber: ''
  }
};
const defaultState: ApplicationFactory = Record(initState);

export default (state: ApplicationState = defaultState(), action: Action): ApplicationState => {
  const { type, payload } = action;

  switch (type) {
    case 'APPLICATION.SWITCH_APPLICATION':
      return state.set('berthsApplicationType', payload);
    case 'APPLICATION.SUBMIT_FORM':
      return state.set('berthSwitch', payload);
    case 'APPLICATION.RESET_APPLICATION':
      return defaultState();
    default:
      return state;
  }
};
