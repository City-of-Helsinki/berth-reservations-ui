import { List } from 'immutable';
import { useState } from 'react';
import * as React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';

import mapIcon from './mapIcon';
import MapMarker from './MapMarker';
import { isResourceSelected } from '../utils/applicationUtils';
import './map.scss';
import Spinner from '../spinner/Spinner';

interface MapProps<T extends { id: string; geometry: { coordinates: [number, number] } }> {
  // eslint-disable-next-line react/no-unused-prop-types
  TabHeader?: React.ReactNode; // required for TabSelector component
  filtered: List<T>;
  filteredNot: List<T>;
  selectedIds: List<string>;
  mapHeader: React.ReactNode;
  loading: boolean;
  renderSelected(selected: T): React.ReactNode;
}

const ZOOM = 11.5;
const COORDINATES = { lng: 25.02, lat: 60.17908 };

const Map = <T extends { id: string; geometry: { coordinates: [number, number] } }>({
  filtered,
  filteredNot,
  selectedIds,
  mapHeader,
  renderSelected,
  loading,
}: MapProps<T>) => {
  const [selectedResource, setSelectedBerth] = useState<T | null>(null);

  const toggleBerthSelect = (berth: T) => {
    setSelectedBerth(selectedResource && selectedResource.id === berth.id ? null : berth);
  };

  if (loading) {
    return <Spinner withText={true} />;
  }

  return (
    <div className="vene-map">
      <h3 className="vene-map__header">{mapHeader}</h3>
      <LeafletMap center={COORDINATES} zoom={ZOOM} className="vene-map__map">
        <TileLayer url="https://tiles.hel.ninja/styles/hel-osm-light/{z}/{x}/{y}@2x.png" />
        {filtered.map((resource) => {
          const isSelected = isResourceSelected(selectedIds, resource.id);
          const isPreviewed = !!selectedResource && selectedResource.id === resource.id;
          return (
            <MapMarker
              id={resource.id}
              markerIcon={mapIcon(isSelected, isPreviewed, false)}
              key={resource.id}
              position={resource.geometry.coordinates}
              onClick={() => toggleBerthSelect(resource)}
            />
          );
        })}
        {filteredNot.map((resource) => {
          const isSelected = isResourceSelected(selectedIds, resource.id);
          const isPreviewed = !!selectedResource && selectedResource.id === resource.id;
          return (
            <MapMarker
              id={resource.id}
              markerIcon={mapIcon(isSelected, isPreviewed, true)}
              key={resource.id}
              position={resource.geometry.coordinates}
              onClick={() => toggleBerthSelect(resource)}
            />
          );
        })}
      </LeafletMap>
      {selectedResource && renderSelected(selectedResource)}
    </div>
  );
};

export default Map;
