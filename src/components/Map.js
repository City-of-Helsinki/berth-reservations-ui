// @flow

import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import L from 'leaflet';

import MapMarker from './MapMarker';
import HarborMatchSelected from './common/icons/harbor-match-chosen.svg';
import HarborMatchUnselected from './common/icons/harbor-unmatch.svg';
import HarborMatchActive from './common/icons/harbor-match-active.svg';
import HarborMatchActiveAndSelected from './common/icons/harbor-match-chosen-active.svg';
import Berth from './berths/Berth';
import { type Berth as BerthType } from '../types/berths';

/* eslint-disable */
delete L.Icon.Default.prototype._getIconUrl;
/* eslint-enable */

const iconSelected = new L.Icon({
  iconUrl: HarborMatchSelected,
  iconRetinaUrl: HarborMatchSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const iconUnselected = new L.Icon({
  iconUrl: HarborMatchUnselected,
  iconRetinaUrl: HarborMatchUnselected,
  iconSize: new L.Point(25, 42),
  className: 'map-marker'
});

const iconPreviewed = new L.Icon({
  iconUrl: HarborMatchActive,
  iconRetinaUrl: HarborMatchActive,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const iconPreviewedAndSelected = new L.Icon({
  iconUrl: HarborMatchActiveAndSelected,
  iconRetinaUrl: HarborMatchActiveAndSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

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
    const { filtered, selected, onClick } = this.props;
    const { selectedBerth } = this.state;
    const position = [this.state.lat, this.state.lng];

    const markerIcon = (isSelected, isPreviewed) => {
      if (isPreviewed && isSelected) {
        return iconPreviewedAndSelected;
      }
      if (isPreviewed) {
        return iconPreviewed;
      }
      if (isSelected) {
        return iconSelected;
      }
      return iconUnselected;
    };

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
                markerIcon={markerIcon(isSelected, isPreviewed)}
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
            disabled={selected.size >= 10}
          />
        )}
      </StyledDiv>
    );
  }
}
