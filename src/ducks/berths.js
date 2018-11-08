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
export const moveUp = createAction('MOVE_BERTH_UP', id => id);
export const moveDown = createAction('MOVE_BERTH_DOWN', id => id);

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
    case 'MOVE_BERTH_UP':
      return state.update('selectedBerths', selectedBerths => {
        const index = selectedBerths.findIndex(k => k === payload);
        const nextInOrder = index - 1;
        const swapWith = selectedBerths.get(nextInOrder);
        if (swapWith && nextInOrder >= 0) {
          const before = selectedBerths.slice(0, index - 1);
          const after = selectedBerths.slice(index + 1);
          return new List()
            .concat(before)
            .concat([payload, swapWith])
            .concat(after);
        }
        return selectedBerths;
      });
    case 'MOVE_BERTH_DOWN':
      return state.update('selectedBerths', selectedBerths => {
        const index = selectedBerths.findIndex(k => k === payload);
        const previousInOrder = index + 1;
        const swapWith = selectedBerths.get(previousInOrder);
        if (swapWith && previousInOrder <= selectedBerths.size - 1) {
          const before = selectedBerths.slice(0, index);
          const after = selectedBerths.slice(index + 2);
          return new List()
            .concat(before)
            .concat([swapWith, payload])
            .concat(after);
        }
        return selectedBerths;
      });
    default:
      return state;
  }
};
