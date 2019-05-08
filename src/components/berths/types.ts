import { List } from 'immutable';

import { BerthType } from '../../types/berth';
import { WinterStorageType } from '../../types/winterStorage';

export type Berths = List<BerthType | WinterStorageType>;

export interface BerthProps {
  filtered: Berths;
  filteredNot: Berths;
  selected: Berths;
  onClick: Function;
  TabHeader?: React.FC;
}
