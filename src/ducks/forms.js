// @flow
import { Record } from 'immutable';
import { createAction } from 'redux-actions';
import type { Action, FormsFactory, FormsState } from '../types/ducks';
import values from './defaultStates/forms';

const defaultState: FormsFactory = Record({
  values,
  step: 0,
  done: false
});

export const onSubmit = createAction('SUBMIT_FORM', formData => formData);
export const nextStep = createAction('WIZARD_NEXT_STEP');
export const prevStep = createAction('WIZARD_PREV_STEP');
export const resetValues = createAction('RESET_FORM');

export default (state: FormsState = defaultState(), action: Action): FormsState => {
  const { type, payload } = action;
  switch (type) {
    case 'SUBMIT_FORM':
      return state.set('values', payload);
    case 'WIZARD_NEXT_STEP':
      return state.update('step', step => step + 1);
    case 'WIZARD_PREV_STEP':
      return state.update('step', step => step - 1);
    case 'RESET_FORM':
      return defaultState();
    default:
      return state;
  }
};
