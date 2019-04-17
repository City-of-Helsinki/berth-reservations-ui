import { Record } from 'immutable';
import { APPLICATION_OPTIONS } from '../../constants/UIConstants';
import { Action, UIFactory, UIState } from '../types';

const defaultState: UIFactory = Record({
  selectedApplicationType: APPLICATION_OPTIONS.NEW_APPLICATION
});

export default (state: UIState = defaultState(), action: Action): UIState => {
  const { type, payload } = action;

  switch (type) {
    case 'UI.SWITCH_APPLICATION':
      return state.set('selectedApplicationType', payload);
    case 'UI.RESET_APPLICATION':
      return defaultState();
    default:
      return state;
  }
};
