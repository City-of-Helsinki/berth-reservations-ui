import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import MapMarker from './MapMarker';
import mapIcon from './mapIcon';

import Berth from './berths/Berth';
import { Berth as BerthType, Berths, SelectedBerths } from '../types/berths';

const ListHeader = styled.h3`
  margin: 1em 0;
`;

const style = {
  width: '100%',
  height: '30em'
};

type State = {
  lat: number;
  lng: number;
  zoom: number;
  selectedBerth: BerthType | null;
};

type Props = {
  filtered: Berths;
  filteredNot: Berths;
  selected: SelectedBerths;
  onClick: Function;
};

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
      <Container>
        <ListHeader>
          <FormattedMessage id="page.berths.list.berth_count" values={{ count: filtered.size }} />
        </ListHeader>
        <Map center={position} zoom={this.state.zoom} style={style}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filtered.map(berth => {
            const isSelected = !!selected && selected.includes(berth.identifier);
            const isPreviewed = !!selectedBerth && selectedBerth.identifier === berth.identifier;
            return (
              <MapMarker
                berth={berth}
                selected={isSelected}
                markerIcon={mapIcon(isSelected, isPreviewed, false)}
                key={berth.identifier}
                position={berth.location.coordinates}
                onClick={() => this.toggleBerthSelect(berth)}
              />
            );
          })}
          {filteredNot.map(berth => {
            const isSelected = selected && selected.includes(berth.identifier);
            const isPreviewed = !!selectedBerth && selectedBerth.identifier === berth.identifier;
            return (
              <MapMarker
                berth={berth}
                selected={isSelected}
                markerIcon={mapIcon(isSelected, isPreviewed, true)}
                key={berth.identifier}
                position={berth.location.coordinates}
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
            onClick={() => onClick(selectedBerth.identifier)}
            selected={selected.includes(selectedBerth.identifier)}
            disabled={selected.size >= Number(REACT_APP_MAX_SELECTED_BERTHS)}
          />
        )}
      </Container>
    );
  }
}
