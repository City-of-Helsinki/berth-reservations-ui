import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Map, TileLayer } from 'react-leaflet';
import { Container } from 'reactstrap';

import mapIcon from './MapIcon';
import MapMarker from './MapMarker';

import Berth from '../../berths/Berth';
import { Berth as BerthType } from '../../berths/Berth/types';
import { Berths } from '../../berths/types';
import './Map.scss';

interface State {
  lat: number;
  lng: number;
  zoom: number;
  selectedBerth: BerthType | null;
}

interface Props {
  filtered: Berths;
  filteredNot: Berths;
  selected: Berths;
  onClick: Function;
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

  toggleBerthSelect = (berth: BerthType) => {
    this.setState(({ selectedBerth }) => ({
      selectedBerth: selectedBerth && selectedBerth.identifier === berth.identifier ? null : berth
    }));
  };

  render() {
    const { filtered, filteredNot, selected, onClick } = this.props;
    const { selectedBerth } = this.state;
    const position: [number, number] = [this.state.lat, this.state.lng];
    const { REACT_APP_MAX_SELECTED_BERTHS } = process.env;

    const excluded =
      !!selectedBerth && filteredNot.some(berth => berth.identifier === selectedBerth.identifier);

    return (
      <Container className="vene-map">
        <h3 className="vene-map__header">
          <FormattedMessage id="page.berths.list.berth_count" values={{ count: filtered.size }} />
        </h3>
        <Map center={position} zoom={this.state.zoom} className="vene-map__map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filtered.map(berth => {
            const isSelected = !!(
              selected && selected.find(selBerth => selBerth.identifier === berth.identifier)
            );
            const isPreviewed = !!selectedBerth && selectedBerth.identifier === berth.identifier;
            return (
              <MapMarker
                berth={berth}
                selected={isSelected}
                markerIcon={mapIcon(isSelected, isPreviewed, false)}
                key={berth.identifier}
                position={berth.geometry.coordinates}
                onClick={() => this.toggleBerthSelect(berth)}
              />
            );
          })}
          {filteredNot.map(berth => {
            const isSelected =
              selected &&
              !!selected.find(selectedBerths => selectedBerths.identifier === berth.identifier);
            const isPreviewed = !!selectedBerth && selectedBerth.identifier === berth.identifier;
            return (
              <MapMarker
                berth={berth}
                selected={isSelected}
                markerIcon={mapIcon(isSelected, isPreviewed, true)}
                key={berth.identifier}
                position={berth.geometry.coordinates}
                onClick={() => this.toggleBerthSelect(berth)}
              />
            );
          })}
        </Map>
        {selectedBerth && (
          <Berth
            excluded={!!excluded}
            key={selectedBerth.identifier}
            berth={selectedBerth}
            onClick={() => onClick(selectedBerth)}
            selected={!!selected.find(selBerth => selBerth.identifier === selectedBerth.identifier)}
            disabled={selected.size >= Number(REACT_APP_MAX_SELECTED_BERTHS)}
          />
        )}
      </Container>
    );
  }
}
