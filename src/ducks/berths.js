// @flow
import { Record, List } from 'immutable';
import { createAction } from 'redux-actions';
import type { Action, Berths } from '../types/ducks';
import berthsService from '../services/berths';

const defaultState = Record({
  berths: List()
});

export const getBerths = createAction('GET_BERTHS', berthsService.getBerths);

export default (state: Berths = defaultState(), action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_BERTHS_FULFILLED':
      return state.set('berths', payload);
    default:
      return state;
  }
};
