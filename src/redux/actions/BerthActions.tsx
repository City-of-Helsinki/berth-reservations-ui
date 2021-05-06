import { createAction } from 'redux-actions';

import { ApplicationOptions } from '../../common/types/applicationType';

const setApplicationType = createAction('SET_APPLICATION_TYPE', (type: ApplicationOptions) => type);
const selectBerth = createAction('SELECT_BERTH', (berthId: string) => berthId);
const deselectBerth = createAction('DESELECT_BERTH', (berthId: string) => berthId);
const moveUp = createAction('MOVE_BERTH_UP', (berthId: string) => berthId);
const moveDown = createAction('MOVE_BERTH_DOWN', (berthId: string) => berthId);
const resetBerths = createAction('RESET_BERTHS');
const selectService = createAction('SELECT_SERVICE', (type: string) => type);
const deselectService = createAction('DESELECT_SERVICE', (type: string) => type);
const setBerthLimit = createAction('SET_BERTH_LIMIT');
const resetBerthLimit = createAction('RESET_BERTH_LIMIT');

export {
  setApplicationType,
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
