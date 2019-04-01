import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Data = styled.span`
  margin-left: 0.5em;
`;

interface Props {
  width: number;
  length: number;
}

const BoatMeasures = ({ width, length }: Props) => (
  <Row>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:<Data>{width}m</Data>
    </Col>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:<Data>{length}m</Data>
    </Col>
  </Row>
);

export default BoatMeasures;
