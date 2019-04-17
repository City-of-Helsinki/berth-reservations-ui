import { createAction } from 'redux-actions';

const selectBerth = createAction('SELECT_BERTH', (id: string) => id);
const deselectBerth = createAction('DESELECT_BERTH', (id: string) => id);
const moveUp = createAction('MOVE_BERTH_UP', (id: string) => id);
const moveDown = createAction('MOVE_BERTH_DOWN', (id: string) => id);
const resetBerths = createAction('RESET_BERTHS');
const selectService = createAction('SELECT_SERVICE', (type: string) => type);
const deselectService = createAction('DESELECT_SERVICE', (type: string) => type);

export {
  selectBerth,
  deselectBerth,
  moveUp,
  moveDown,
  resetBerths,
  selectService,
  deselectService
};
