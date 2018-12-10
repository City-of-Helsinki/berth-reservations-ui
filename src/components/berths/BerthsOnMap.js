import React from 'react';
import styled from 'styled-components';
import Map from '../Map';

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default ({ berths, onClick, selected, filtered }) => (
  <div>
    <MapContainer>
      <Map berths={berths} onClick={onClick} selected={selected} filtered={filtered} />
    </MapContainer>
  </div>
);
