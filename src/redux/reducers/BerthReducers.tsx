import { List, Record } from 'immutable';

import { ApplicationOptions } from '../../common/types/applicationType';
import { Action, BerthsFactory, BerthsProps, BerthsState } from '../types';

export const selectedServices = Record({
  electricity: false,
  water: false,
  wasteCollection: false,
  gate: false,
  lighting: false,
});

const initState: BerthsProps = {
  applicationType: ApplicationOptions.NewApplication,
  selectedHarbors: List<string>(),
  selectedServices: selectedServices(),
  berthLimit: Number(process.env.REACT_APP_MAX_SELECTED_BERTHS) || 10,
};
const defaultState: BerthsFactory = Record(initState);

const BerthReducers = (state: BerthsState = defaultState(), action: Action): BerthsState => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_APPLICATION_TYPE':
      return state.set('applicationType', payload);
    case 'SELECT_SERVICE':
      return state.setIn(['selectedServices', payload], true);
    case 'DESELECT_SERVICE':
      return state.setIn(['selectedServices', payload], false);
    case 'SELECT_BERTH':
      return state.update('selectedHarbors', (selectedHarbors) => selectedHarbors.push(payload));
    case 'DESELECT_BERTH':
      return state.update('selectedHarbors', (selectedHarbors) => selectedHarbors.filterNot((b) => b === payload));
    case 'MOVE_BERTH_UP':
      return state.update('selectedHarbors', (selectedHarbors) => {
        const index = selectedHarbors.findIndex((k) => k === payload);
        const nextInOrder = index - 1;
        const swapWith = selectedHarbors.get(nextInOrder);
        if (swapWith && nextInOrder >= 0) {
          const before = selectedHarbors.slice(0, index - 1);
          const after = selectedHarbors.slice(index + 1);
          return List([]).concat(before).concat([payload, swapWith]).concat(after);
        }
        return selectedHarbors;
      });
    case 'MOVE_BERTH_DOWN':
      return state.update('selectedHarbors', (selectedHarbors) => {
        const index = selectedHarbors.findIndex((k) => k === payload);
        const previousInOrder = index + 1;
        const swapWith = selectedHarbors.get(previousInOrder);
        if (swapWith && previousInOrder <= selectedHarbors.size - 1) {
          const before = selectedHarbors.slice(0, index);
          const after = selectedHarbors.slice(index + 2);
          return List([]).concat(before).concat([swapWith, payload]).concat(after);
        }
        return selectedHarbors;
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

export default BerthReducers;
