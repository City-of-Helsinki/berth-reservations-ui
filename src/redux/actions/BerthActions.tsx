import { createAction } from 'redux-actions';
import { Berth } from '../../components/berths/Berth/types';

const selectBerth = createAction('SELECT_BERTH', (berth: Berth) => berth);
const deselectBerth = createAction('DESELECT_BERTH', (berth: Berth) => berth);
const moveUp = createAction('MOVE_BERTH_UP', (berth: Berth) => berth);
const moveDown = createAction('MOVE_BERTH_DOWN', (berth: Berth) => berth);
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
