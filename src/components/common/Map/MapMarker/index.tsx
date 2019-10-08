import L from 'leaflet';
import React from 'react';
import { Marker } from 'react-leaflet';

interface Props {
  id: string;
  selected: boolean;
  onClick: Function;
  markerIcon: L.Icon;
  position: [number, number];
}

const MapMarker = ({ id, onClick, markerIcon, position }: Props) => {
  return <Marker onClick={onClick} icon={markerIcon} key={id} position={position} />;
};

export default MapMarker;
