import { List, Record } from 'immutable';
import { createAction } from 'redux-actions';
import berthsService from '../services/berths';
import { Action, BerthsFactory, BerthsState } from '../types/ducks';

const selectedServices = Record({
  electricity: false,
  water: false,
  waste_collection: false,
  gate: false,
  lighting: false
});

const defaultState: BerthsFactory = Record({
  berths: List(),
  selectedBerths: List(),
  selectedServices: selectedServices()
});

export const getBerths = createAction('GET_BERTHS', berthsService.getBerths);
export const selectBerth = createAction('SELECT_BERTH', (id: string) => id);
export const deselectBerth = createAction('DESELECT_BERTH', (id: string) => id);
export const moveUp = createAction('MOVE_BERTH_UP', (id: string) => id);
export const moveDown = createAction('MOVE_BERTH_DOWN', (id: string) => id);
export const resetBerths = createAction('RESET_BERTHS');
export const selectService = createAction('SELECT_SERVICE', (type: string) => type);
export const deselectService = createAction('DESELECT_SERVICE', (type: string) => type);

export default (state: BerthsState = defaultState(), action: Action): BerthsState => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_BERTHS_FULFILLED':
      return state.set('berths', payload);
    case 'SELECT_SERVICE':
      return state.setIn(['selectedServices', payload], true);
    case 'DESELECT_SERVICE':
      return state.setIn(['selectedServices', payload], false);
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
          return List([])
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
          return List([])
            .concat(before)
            .concat([swapWith, payload])
            .concat(after);
        }
        return selectedBerths;
      });
    case 'RESET_BERTHS':
      return defaultState();
    default:
      return state;
  }
};
