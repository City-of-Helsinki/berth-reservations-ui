import { List, Record } from 'immutable';

import { Action, WinterAreasFactory, WinterAreasProps, WinterAreasState } from '../types';

const selectedWinterServices = Record({
  electricity: false,
  water: false,
  gate: false,
  summerStorageForDockingEquipment: false,
  summerStorageForTrailers: false,
});

const init: WinterAreasProps = {
  selectedWinterAreas: List<string>(),
  selectedWinterServices: selectedWinterServices(),
  areasLimit: Number(process.env.REACT_APP_MAX_SELECTED_BERTHS) || 10,
};

const defaultState: WinterAreasFactory = Record(init);

const WinterAreaReducers = (state: WinterAreasState = defaultState(), action: Action): WinterAreasState => {
  const { type, payload } = action;
  switch (type) {
    case 'SELECT_WINTER_SERVICE':
      return state.setIn(['selectedWinterServices', payload], true);
    case 'DESELECT_WINTER_SERVICE':
      return state.setIn(['selectedWinterServices', payload], false);
    case 'SELECT_WINTER_AREA':
      return state.update('selectedWinterAreas', (selectedAreas) => selectedAreas.push(payload));
    case 'DESELECT_WINTER_AREA':
      return state.update('selectedWinterAreas', (selectedAreas) => selectedAreas.filterNot((b) => b === payload));
    case 'MOVE_WINTER_AREA_UP':
      return state.update('selectedWinterAreas', (selectedAreas) => {
        const index = selectedAreas.findIndex((k) => k === payload);
        const nextInOrder = index - 1;
        const swapWith = selectedAreas.get(nextInOrder);
        if (swapWith && nextInOrder >= 0) {
          const before = selectedAreas.slice(0, index - 1);
          const after = selectedAreas.slice(index + 1);
          return List([]).concat(before).concat([payload, swapWith]).concat(after);
        }
        return selectedAreas;
      });
    case 'MOVE_WINTER_AREA_DOWN':
      return state.update('selectedWinterAreas', (selectedAreas) => {
        const index = selectedAreas.findIndex((k) => k === payload);
        const previousInOrder = index + 1;
        const swapWith = selectedAreas.get(previousInOrder);
        if (swapWith && previousInOrder <= selectedAreas.size - 1) {
          const before = selectedAreas.slice(0, index);
          const after = selectedAreas.slice(index + 2);
          return List([]).concat(before).concat([swapWith, payload]).concat(after);
        }
        return selectedAreas;
      });
    case 'RESET_WINTER_AREAS':
      return defaultState();
    default:
      return state;
  }
};

export default WinterAreaReducers;
