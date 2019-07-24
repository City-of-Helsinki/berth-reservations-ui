import { List } from 'immutable';

import { BerthType } from '../../types/berth';
import { WinterStorageType } from '../../types/winterStorage';

export type Berths = List<BerthType | WinterStorageType>;

export type SelectedIds = List<string>;

export interface BerthProps {
  filtered: Berths;
  filteredNot: Berths;
  selected: SelectedIds;
  onClick: Function;
  TabHeader?: React.FC;
  berthLimit: number;
}
