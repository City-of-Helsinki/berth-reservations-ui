import React from 'react';
import styled from 'styled-components';
import Map from '../../components/Map';

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
`;

export default ({ berths, onClick, selected }) => (
  <div>
    <MapContainer>
      <Map berths={berths} onClick={onClick} selected={selected} />
    </MapContainer>
  </div>
);
