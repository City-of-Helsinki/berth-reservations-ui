import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import './Form.scss';

interface Props {
  draught: number;
  weight: number;
}

const BoatDraughtAndWeight = ({ draught, weight }: Props) => (
  <Row>
    <Col md={6}>
      <div className="vene-overview-info__boat-info">
        <FormattedMessage tagName="span" id="page.overview.info.boat_draught" />
        <span>:</span>
        <span className="vene-form__data">{draught}m</span>
      </div>
    </Col>
    <Col md={6}>
      <div className="vene-overview-info__boat-info">
        <FormattedMessage tagName="span" id="page.overview.info.boat_weight" />
        <span>:</span>
        <span className="vene-form__data">{weight}</span>
        kg
      </div>
    </Col>
  </Row>
);

export default BoatDraughtAndWeight;
