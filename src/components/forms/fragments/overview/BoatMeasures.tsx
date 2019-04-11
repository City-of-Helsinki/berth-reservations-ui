import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import './Form.scss';

interface Props {
  width: number;
  length: number;
}

const BoatMeasures = ({ width, length }: Props) => (
  <Row>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
      <span className="app-form__data">{width}m</span>
    </Col>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
      <span className="app-form__data">{length}m</span>
    </Col>
  </Row>
);

export default BoatMeasures;
