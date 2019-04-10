import { Record } from 'immutable';
import { createAction } from 'redux-actions';
import { Action, FormsFactory, FormsState } from '../types/ducks';

// @ts-ignore
const defaultState: FormsFactory = Record({
  values: {}
});

export const onSubmit = createAction('SUBMIT_FORM', (formData: {}) => formData);
export const resetValues = createAction('RESET_FORM');

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
