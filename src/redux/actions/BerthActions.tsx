import { createAction } from 'redux-actions';
import { BerthType } from '../../types/berth';

const selectBerth = createAction('SELECT_BERTH', (berth: BerthType) => berth);
const deselectBerth = createAction('DESELECT_BERTH', (berth: BerthType) => berth);
const moveUp = createAction('MOVE_BERTH_UP', (berth: BerthType) => berth);
const moveDown = createAction('MOVE_BERTH_DOWN', (berth: BerthType) => berth);
const resetBerths = createAction('RESET_BERTHS');
const selectService = createAction('SELECT_SERVICE', (type: string) => type);
const deselectService = createAction('DESELECT_SERVICE', (type: string) => type);
const setBerthLimit = createAction('SET_BERTH_LIMIT');
const resetBerthLimit = createAction('RESET_BERTH_LIMIT');

export {
  selectBerth,
  deselectBerth,
  moveUp,
  moveDown,
  resetBerths,
  selectService,
  deselectService,
  setBerthLimit,
  resetBerthLimit,
};
