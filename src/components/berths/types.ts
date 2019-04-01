import { List } from 'immutable';
import { Berth } from './Berth/types';

export type Berths = List<Berth>;
export type SelectedBerths = List<string>;

export interface BerthProps {
  filtered: Berths;
  filteredNot: Berths;
  selected: SelectedBerths;
  onClick: Function;
  TabHeader?: React.FC;
}
