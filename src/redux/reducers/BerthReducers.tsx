import { List, Record } from 'immutable';
import { Action, BerthsFactory, BerthsState } from '../types';

export const selectedServices = Record({
  electricity: false,
  water: false,
  wasteCollection: false,
  gate: false,
  lighting: false
});

const defaultState: BerthsFactory = Record({
  selectedBerths: List(),
  selectedServices: selectedServices(),
  berthLimit: Number(process.env.REACT_APP_MAX_SELECTED_BERTHS) || 10
});

export default (state: BerthsState = defaultState(), action: Action): BerthsState => {
  const { type, payload } = action;
  switch (type) {
    case 'SELECT_SERVICE':
      return state.setIn(['selectedServices', payload], true);
    case 'DESELECT_SERVICE':
      return state.setIn(['selectedServices', payload], false);
    case 'SELECT_BERTH':
      return state.update('selectedBerths', selectedBerths => selectedBerths.push(payload));
    case 'DESELECT_BERTH':
      return state.update('selectedBerths', selectedBerths =>
        selectedBerths.filterNot(b => b.id === payload.id)
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
    case 'SET_BERTH_LIMIT':
      return state.merge({ berthLimit: payload });
    case 'RESET_BERTH_LIMIT':
      return state.merge({ berthLimit: defaultState().berthLimit });
    default:
      return state;
  }
};
