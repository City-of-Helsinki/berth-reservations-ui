import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

interface Props {
  draught: number;
  weight: number;
}

const BoatDraughtAndWeight = ({ draught, weight }: Props) => (
  <Row>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_draught" />:
      <span className="app-form__data">{draught}m</span>
    </Col>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_weight" />:
      <span className="app-form__data">{weight}</span>
      kg
    </Col>
  </Row>
);

export default BoatDraughtAndWeight;
