// @flow

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Marker, Popup } from 'react-leaflet';
import { Container, Row, Col, Button } from 'reactstrap';
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
