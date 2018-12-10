import React from 'react';
import styled from 'styled-components';
import Map from '../Map';

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default ({ onClick, selected, filtered, filteredNot }) => (
  <div>
    <MapContainer>
      <Map onClick={onClick} selected={selected} filtered={filtered} filteredNot={filteredNot} />
    </MapContainer>
  </div>
);
