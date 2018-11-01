// @flow
import { Record, List } from 'immutable';
import { createAction } from 'redux-actions';
import type { Action, Berths } from '../types/ducks';
import berthsService from '../services/berths';

const defaultState = Record({
  berths: List(),
  selectedBerths: List()
});

export const getBerths = createAction('GET_BERTHS', berthsService.getBerths);
export const selectBerth = createAction('SELECT_BERTH', id => id);
export const deselectBerth = createAction('DESELECT_BERTH', id => id);

export default (state: Berths = defaultState(), action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_BERTHS_FULFILLED':
      return state.set('berths', payload);
    case 'SELECT_BERTH':
      return state.update('selectedBerths', selectedBerths => selectedBerths.push(payload));
    case 'DESELECT_BERTH':
      return state.update('selectedBerths', selectedBerths =>
        selectedBerths.filterNot(b => b === payload)
      );
    default:
      return state;
  }
};
