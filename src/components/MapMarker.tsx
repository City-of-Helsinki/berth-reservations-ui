// @flow

import React, { Component } from 'react';
import { Marker } from 'react-leaflet';
import { List } from 'immutable';

type Props = any;

export default class MapMarker extends Component<Props> {
  static defaultProps = {
    berth: Object,
    selected: List,
    onClick: Function,
    markerIcon: String,
    position: Array
  };

  render() {
    const { berth, onClick, markerIcon, position } = this.props;

    return (
      <Marker onClick={onClick} icon={markerIcon} key={berth.identifier} position={position} />
    );
  }
}
