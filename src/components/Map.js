// @flow

import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

import MapMarker from './MapMarker';
import MapIcon from './MapIcon';

import Berth from './berths/Berth';
import { type Berth as BerthType } from '../types/berths';

const style = {
  width: '100%',
  height: '40em'
};

const StyledDiv = styled.div`
  max-width: ${props => props.theme.maxWidth.xl};
  flex-grow: 1;
`;

type State = {
  lat: number,
  lng: number,
  zoom: number,
  selectedBerth: BerthType | null
};

type Props = any;

export default class MapCanvas extends Component<Props, State> {
  state = {
    lng: 25.02,
    lat: 60.17908,
    zoom: 11.5,
    selectedBerth: null
  };

  render() {
    const { filtered, filteredNot, selected, onClick } = this.props;
    const { selectedBerth } = this.state;
    const position = [this.state.lat, this.state.lng];
    const { REACT_APP_MAX_SELECTED_BERTHS } = process.env;

    return (
      <StyledDiv>
        <Map center={position} zoom={this.state.zoom} style={style}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filtered.map(berth => {
            const isSelected = selected && selected.includes(berth.identifier);
            const isPreviewed = selectedBerth && selectedBerth.identifier === berth.identifier;
            return (
              <MapMarker
                berth={berth}
                selected={isSelected}
                markerIcon={MapIcon(isSelected, isPreviewed, false)}
                key={berth.identifier}
                position={berth.location.coordinates}
                onClick={() => this.setState({ selectedBerth: berth })}
              />
            );
          })}
          {filteredNot.map(berth => {
            const isSelected = selected && selected.includes(berth.identifier);
            const isPreviewed = selectedBerth && selectedBerth.identifier === berth.identifier;
            return (
              <MapMarker
                berth={berth}
                selected={isSelected}
                markerIcon={MapIcon(isSelected, isPreviewed, true)}
                key={berth.identifier}
                position={berth.location.coordinates}
                onClick={() => this.setState({ selectedBerth: berth })}
              />
            );
          })}
        </Map>
        {selectedBerth && (
          <Berth
            key={selectedBerth.identifier}
            berth={selectedBerth}
            onClick={() => onClick(selectedBerth.identifier)}
            selected={selected.includes(selectedBerth.identifier)}
            disabled={selected.size >= REACT_APP_MAX_SELECTED_BERTHS}
          />
        )}
      </StyledDiv>
    );
  }
}
