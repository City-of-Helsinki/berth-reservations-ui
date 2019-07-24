import React from 'react';
import Map from '../../common/Map';

import { Berths as BerthsType, SelectedIds } from '../../berths/types';

import './berths-on-map.scss';

interface Props {
  filtered: BerthsType;
  filteredNot: BerthsType;
  selected: SelectedIds;
  TabHeader?: React.FC;
  onClick: Function;
  berthLimit: number;
}

const BerthsOnMap = ({ onClick, selected, filtered, filteredNot, berthLimit }: Props) => (
  <div className="vene-berths-on-map">
    <Map
      onClick={onClick}
      selected={selected}
      filtered={filtered}
      filteredNot={filteredNot}
      berthLimit={berthLimit}
    />
  </div>
);

export default BerthsOnMap;
