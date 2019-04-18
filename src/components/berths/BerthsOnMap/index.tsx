import React from 'react';
import Map from '../../common/Map';

import { Berths as BerthsType } from '../../berths/types';
interface Props {
  filtered: BerthsType;
  filteredNot: BerthsType;
  selected: BerthsType;
  TabHeader?: React.FC;
  onClick: Function;
}

export default ({ onClick, selected, filtered, filteredNot }: Props) => (
  <div>
    <Map onClick={onClick} selected={selected} filtered={filtered} filteredNot={filteredNot} />
  </div>
);
