import { List } from 'immutable';

import { BerthType } from '../../types/berth';
import { WinterStorageType } from '../../types/winterStorage';

export type Berths = List<BerthType>;
export type WinterAreas = List<WinterStorageType>;

export type SelectedIds = List<string>;
