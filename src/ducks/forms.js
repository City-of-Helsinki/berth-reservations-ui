// @flow
import { Record } from 'immutable';
import { createAction } from 'redux-actions';
import type { Action, Forms } from '../types/ducks';

const defaultState = Record({
  values: {
    registeredBoat: {},
    person: {},
    overview: {},
    privatePerson: {}
  },
  step: 1,
  done: false
});

export const onSubmit = createAction('SUBMIT_FORM', formData => formData);
export const nextStep = createAction('WIZARD_NEXT_STEP');
export const prevStep = createAction('WIZARD_PREV_STEP');

export default (state: Forms = defaultState(), action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SUBMIT_FORM':
      return state.set('values', payload).set('done', true);
    case 'WIZARD_NEXT_STEP':
      return state.update('step', step => step + 1);
    case 'WIZARD_PREV_STEP':
      return state.update('step', step => step - 1);
    default:
      return state;
  }
};
