// @flow

import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Row, Col, Button } from 'reactstrap';
import L from 'leaflet';

import HarborMatchSelected from './common/icons/harbor-match-chosen.svg';
import HarborMatchUnselected from './common/icons/harbor-match.svg';
import HarborUnmatch from './common/icons/harbor-unmatch.svg';

import MapMarker from './MapMarker';

/* eslint-disable */
delete L.Icon.Default.prototype._getIconUrl;
/* eslint-enable */

const iconSelected = new L.Icon({
  iconUrl: HarborMatchSelected,
  iconRetinaUrl: HarborMatchSelected,
  iconSize: new L.Point(45, 45),
  className: 'map-marker'
});

const iconUnselected = new L.Icon({
  iconUrl: HarborMatchUnselected,
  iconRetinaUrl: HarborMatchUnselected,
  iconSize: new L.Point(45, 45),
  className: 'map-marker'
});

const iconUnmatched = new L.Icon({
  iconUrl: HarborUnmatch,
  iconRetinaUrl: HarborUnmatch,
  iconSize: new L.Point(45, 45),
  className: 'map-marker'
});

const style = {
  width: '80%',
  height: '100%'
};

type State = {
  lat: number,
  lng: number,
  zoom: number
};

type Props = any;

export default class SimpleExample extends Component<Props, State> {
  state = {
    lng: 25.066105,
    lat: 60.18808,
    zoom: 14
  };

  render() {
    const { berths, filtered, selected, onClick } = this.props;
    const position = [this.state.lat, this.state.lng];

    return (
      <Map center={position} zoom={this.state.zoom} style={style}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {berths.map(berth => {
          const markerIcon = () => {
            if (selected && selected.includes(berth.identifier)) {
              return iconSelected;
            }

            return iconUnmatched;
          };

          return (
            <MapMarker
              berth={berth}
              selected={selected}
              markerIcon={markerIcon}
              key={berth.identifier}
              position={berth.location.coordinates}
              onClick={() => onClick(berth.identifier)}
            />
          );
        })}
      </Map>
    );
  }
}
