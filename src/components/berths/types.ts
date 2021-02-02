import { List } from 'immutable';

import { BerthType } from '../../features/berthApplication/types';
import { WinterStorageType } from '../../features/winterStorageApplication/types';

export type Berths = List<BerthType>;
export type WinterAreas = List<WinterStorageType>;

export type SelectedIds = List<string>;
