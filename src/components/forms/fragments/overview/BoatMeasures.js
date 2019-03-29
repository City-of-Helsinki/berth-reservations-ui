// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import './_data.scss';

type Props = {
  width: number,
  length: number
};

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
