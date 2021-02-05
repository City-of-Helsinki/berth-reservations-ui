import { createAction } from 'redux-actions';

const filterByStorageArea = createAction('FILTER_BY_STORAGE_AREA');
const selectWinterArea = createAction('SELECT_WINTER_AREA', (areaId: string) => areaId);
const deselectWinterArea = createAction('DESELECT_WINTER_AREA', (areaId: string) => areaId);
const moveWinterAreaUp = createAction('MOVE_WINTER_AREA_UP', (areaId: string) => areaId);
const moveWinterAreaDown = createAction('MOVE_WINTER_AREA_DOWN', (areaId: string) => areaId);
const resetWinterAreas = createAction('RESET_WINTER_AREAS');
const selectService = createAction('SELECT_WINTER_SERVICE', (type: string) => type);
const deselectService = createAction('DESELECT_WINTER_SERVICE', (type: string) => type);

export {
  selectWinterArea,
  deselectWinterArea,
  moveWinterAreaUp,
  moveWinterAreaDown,
  resetWinterAreas,
  selectService,
  deselectService,
  filterByStorageArea,
};
