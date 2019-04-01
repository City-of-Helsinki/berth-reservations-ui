import React from 'react';
import Map from '../../Map';

import { Berths as BerthsType, SelectedBerths } from '@berths/types';

interface Props {
  filtered: BerthsType;
  filteredNot: BerthsType;
  selected: SelectedBerths;
  onClick: Function;
  TabHeader?: React.FC;
}

export default ({ onClick, selected, filtered, filteredNot }: Props) => (
  <div>
    <Map onClick={onClick} selected={selected} filtered={filtered} filteredNot={filteredNot} />
  </div>
);
