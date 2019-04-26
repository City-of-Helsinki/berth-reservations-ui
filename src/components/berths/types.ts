import { List } from 'immutable';
import { Berth } from './Berth/types';

export type Berths = List<Berth>;

export interface BerthProps {
  filtered: Berths;
  filteredNot: Berths;
  selected: Berths;
  onClick: Function;
  TabHeader?: React.FC;
  berthLimit: number;
}
