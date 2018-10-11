// @flow
import { Record, List } from 'immutable';
import { createAction } from 'redux-actions';
import userService from '../services/user';
import type { Action, First } from '../types/ducks';

const defaultState = Record({
  first: undefined,
  users: List()
});

export const sayHi = createAction('FIRST', () => 'hi');
export const getUsers = createAction('GET_USERS', userService.getUsers);

export default (state: First = defaultState(), action: Action): Record => {
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
