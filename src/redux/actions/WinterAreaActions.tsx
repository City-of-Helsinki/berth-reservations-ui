import { createAction } from 'redux-actions';
import { WinterStorageType } from '../../types/winterStorage';

const filterByStorageArea = createAction('FILTER_BY_STORAGE_AREA');
const selectWinterArea = createAction('SELECT_WINTER_AREA', (area: WinterStorageType) => area);
const deselectWinterArea = createAction('DESELECT_WINTER_AREA', (area: WinterStorageType) => area);
const moveWinterAreaUp = createAction('MOVE_WINTER_AREA_UP', (area: WinterStorageType) => area);
const moveWinterAreaDown = createAction('MOVE_WINTER_AREA_DOWN', (area: WinterStorageType) => area);
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
  filterByStorageArea
};
