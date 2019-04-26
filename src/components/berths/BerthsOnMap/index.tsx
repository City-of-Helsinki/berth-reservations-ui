import React from 'react';
import Map from '../../common/Map';

import { Berths as BerthsType } from '../../berths/types';
interface Props {
  filtered: BerthsType;
  filteredNot: BerthsType;
  selected: BerthsType;
  TabHeader?: React.FC;
  onClick: Function;
  berthLimit: number;
}

export default ({ onClick, selected, filtered, filteredNot, berthLimit }: Props) => (
  <div>
    <Map
      onClick={onClick}
      selected={selected}
      filtered={filtered}
      filteredNot={filteredNot}
      berthLimit={berthLimit}
    />
  </div>
);
