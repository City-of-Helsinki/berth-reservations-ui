import { Record } from 'immutable';
import { Action, FormsFactory, FormsState } from '../types';

const defaultState: FormsFactory = Record({
  values: {}
});

export default (state: FormsState = defaultState(), action: Action): FormsState => {
  const { type, payload } = action;
  switch (type) {
    case 'SUBMIT_FORM':
      return state.set('values', payload);
    case 'RESET_FORM':
      return defaultState();
    default:
      return state;
  }
};
