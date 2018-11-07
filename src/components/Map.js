// @flow

import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Row, Col, Button } from 'reactstrap';
import L from 'leaflet';

import fence from './common/icons/fence.svg';
import plug from './common/icons/plug.svg';

/* eslint-disable */
delete L.Icon.Default.prototype._getIconUrl;
/* eslint-enable */

const iconSelected = new L.Icon({
  iconUrl: fence,
  iconRetinaUrl: fence,
  iconSize: new L.Point(60, 75),
  className: 'map-marker'
});

const iconUnselected = new L.Icon({
  iconUrl: plug,
  iconRetinaUrl: plug,
  iconSize: new L.Point(60, 75),
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
    const { berths, onClick, selected } = this.props;
    const position = [this.state.lat, this.state.lng];

    return (
      <Map center={position} zoom={this.state.zoom} style={style}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {berths.map(berth => {
          const markerIcon = selected.includes(berth.identifier) ? iconSelected : iconUnselected;
          return (
            <Marker icon={markerIcon} key={berth.identifier} position={berth.location.coordinates}>
              <Popup>
                <Container>
                  <Row>
                    <Col>
                      <img alt={berth.name.fi} width="180" src={berth.image_file} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>{berth.name.fi}</strong>
                      <div>{berth.street_address.fi}</div>
                      <div>{berth.municipality.fi}</div>
                      {selected.includes(berth.identifier) ? (
                        <Button color="secondary" onClick={() => onClick(berth.identifier)}>
                          Valittu
                        </Button>
                      ) : (
                        <Button outline primary="true" onClick={() => onClick(berth.identifier)}>
                          + Lisää
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Container>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    );
  }
}
