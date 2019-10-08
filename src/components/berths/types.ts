import { List } from 'immutable';

import { BerthType } from '../../types/berth';
import { WinterStorageType } from '../../types/winterStorage';

export type Berths = List<BerthType>;
export type WinterAreas = List<WinterStorageType>;
export type Resources = List<BerthType | WinterStorageType>;

export type SelectedIds = List<string>;

export interface BerthProps {
  filtered: Resources;
  filteredNot: Resources;
  selected: SelectedIds;
  onClick: Function;
  TabHeader?: React.FC;
  berthLimit: number;
}
