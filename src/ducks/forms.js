// @flow
import { Record } from 'immutable';
import { createAction } from 'redux-actions';
import type { Action, Forms } from '../types/ducks';

const defaultState = Record({
  registeredBoat: {}
});

export const saveRegisteredBoat = createAction('SAVE_REGISTERED_BOAT', formData => formData);
export const onSubmit = createAction('SAVE_REGISTERED_BOAT', formData => formData);

export default (state: Forms = defaultState(), action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SAVE_REGISTERED_BOAT':
      return state.set('registeredBoat', payload);
    default:
      return state;
  }
};
