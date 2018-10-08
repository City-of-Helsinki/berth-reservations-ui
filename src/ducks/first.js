// @flow

import { Record } from 'immutable';
import type { RecordOf } from 'immutable';
import { createAction } from 'redux-actions';
import type { Action } from '../types/ducks';

type DefaultState = RecordOf<{
  first: ?string
}>;

const defaultState = Record({
  first: undefined
});

export const sayHi = createAction('FIRST', () => 'hi');

export default (state: DefaultState = defaultState(), action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FIRST':
      return state.set('first', payload);
    default:
      return state;
  }
};
