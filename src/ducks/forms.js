// @flow
import { Record } from 'immutable';
import { createAction } from 'redux-actions';
import type { Action, FormsFactory, FormsState } from '../types/ducks';
import berthsService from '../services/berths';

const defaultState: FormsFactory = Record({
  values: {},
  boatTypes: undefined
});

export const onSubmit = createAction('SUBMIT_FORM', formData => formData);
export const getBoatTypes = createAction('GET_BOAT_TYPES', berthsService.getBoatTypes);
export const resetValues = createAction('RESET_FORM');

export default (state: FormsState = defaultState(), action: Action): FormsState => {
  const { type, payload } = action;
  switch (type) {
    case 'SUBMIT_FORM':
      return state.set('values', payload);
    case 'GET_BOAT_TYPES_FULFILLED':
      return state.set('boatTypes', payload);
    case 'RESET_FORM':
      return defaultState();
    default:
      return state;
  }
};
