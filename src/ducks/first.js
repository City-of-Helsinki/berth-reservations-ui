// @flow

import { Record, List, type RecordOf } from 'immutable';
import { createAction } from 'redux-actions';
import type { Action } from '../types/ducks';
import userService from '../services/user';
import type { Users } from '../types/user';

type DefaultState = RecordOf<{
  first: ?string,
  users: Users
}>;

const defaultState = Record({
  first: undefined,
  users: List()
});

export const sayHi = createAction('FIRST', () => 'hi');
export const getUsers = createAction('GET_USERS', userService.getUsers);

export default (state: DefaultState = defaultState(), action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FIRST':
      return state.set('first', payload);
    case 'GET_USERS_FULFILLED':
      return state.set('users', payload);
    default:
      return state;
  }
};
