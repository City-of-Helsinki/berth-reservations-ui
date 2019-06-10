import { Record } from 'immutable';
import { Action, FormsFactory, FormsState } from '../types';

const defaultState: FormsFactory = Record({
  berthValues: {},
  winterValues: {}
});

export default (state: FormsState = defaultState(), action: Action): FormsState => {
  const { type, payload } = action;
  switch (type) {
    case 'SUBMIT_BERTH_FORM':
      return state.set('berthValues', payload);
    case 'SUBMIT_WINTER_FORM':
      return state.set('winterValues', payload);
    case 'RESET_FORM':
      return defaultState();
    default:
      return state;
  }
};
