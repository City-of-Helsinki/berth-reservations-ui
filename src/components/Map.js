// @flow

import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';
import L from 'leaflet';

const iconRetina = require('leaflet/dist/images/marker-icon-2x.png');
const icon = require('leaflet/dist/images/marker-icon.png');
const shadow = require('leaflet/dist/images/marker-shadow.png');

/* eslint-disable */
delete L.Icon.Default.prototype._getIconUrl;
/* eslint-enable */

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow
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
          console.log(selected);
          console.log(berth.id);
          console.log(selected.includes(berth.id));
          return (
            <Marker key={berth.id} position={berth.location.coordinates}>
              <Popup>
                <Container>
                  <Row>
                    <Col>
                      <img width="180" src={berth.image_file} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>{berth.name.fi}</strong>
                      <div>{berth.street_address.fi}</div>
                      <div>{berth.municipality.fi}</div>
                      {selected.includes(berth.id) ? (
                        <Button color="secondary" onClick={onClick}>
                          Valittu
                        </Button>
                      ) : (
                        <Button outline primary="true" onClick={onClick}>
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
