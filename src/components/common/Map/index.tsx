import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Map, TileLayer } from 'react-leaflet';
import { Container } from 'reactstrap';

import Berth from '../../berths/Berth';
import mapIcon from './MapIcon';
import MapMarker from './MapMarker';

import { BerthType } from '../../../types/berth';
import { WinterStorageType } from '../../../types/winterStorage';
import { Berths } from '../../berths/types';

import { isBerthSelected } from '../../../utils/berths';

import './Map.scss';

interface State {
  lat: number;
  lng: number;
  zoom: number;
  selectedBerth: BerthType | WinterStorageType | null;
}

interface Props {
  filtered: Berths;
  filteredNot: Berths;
  selected: Berths;
  onClick: Function;
  berthLimit: number;
}

export default class MapCanvas extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      lng: 25.02,
      lat: 60.17908,
      zoom: 11.5,
      selectedBerth: null
    };
  }

  toggleBerthSelect = (berth: BerthType | WinterStorageType) => {
    this.setState(({ selectedBerth }) => ({
      selectedBerth: selectedBerth && selectedBerth.id === berth.id ? null : berth
    }));
  };

  render() {
    const { filtered, filteredNot, selected, onClick, berthLimit } = this.props;
    const { selectedBerth } = this.state;
    const position: [number, number] = [this.state.lat, this.state.lng];

    const excluded = !!selectedBerth && filteredNot.some(berth => berth.id === selectedBerth.id);

    return (
      <Container className="vene-map">
        <h3 className="vene-map__header">
          <FormattedMessage id="page.berths.list.berth_count" values={{ count: filtered.size }} />
        </h3>
        <Map center={position} zoom={this.state.zoom} className="vene-map__map">
          <TileLayer url="https://tiles.hel.ninja/styles/hel-osm-light/{z}/{x}/{y}@2x.png" />
          {filtered.map(berth => {
            const isSelected = isBerthSelected(selected, berth);
            const isPreviewed = !!selectedBerth && selectedBerth.id === berth.id;
            return (
              <MapMarker
                berth={berth}
                selected={isSelected}
                markerIcon={mapIcon(isSelected, isPreviewed, false)}
                key={berth.id}
                position={berth.geometry.coordinates}
                onClick={() => this.toggleBerthSelect(berth)}
              />
            );
          })}
          {filteredNot.map(berth => {
            const isSelected = isBerthSelected(selected, berth);
            const isPreviewed = !!selectedBerth && selectedBerth.id === berth.id;
            return (
              <MapMarker
                berth={berth}
                selected={isSelected}
                markerIcon={mapIcon(isSelected, isPreviewed, true)}
                key={berth.id}
                position={berth.geometry.coordinates}
                onClick={() => this.toggleBerthSelect(berth)}
              />
            );
          })}
        </Map>
        {selectedBerth && (
          <Berth
            excluded={!!excluded}
            key={selectedBerth.id}
            berth={selectedBerth}
            onClick={() => onClick(selectedBerth)}
            selected={isBerthSelected(selected, selectedBerth)}
            disabled={selected.size >= berthLimit}
          />
        )}
      </Container>
    );
  }
}
