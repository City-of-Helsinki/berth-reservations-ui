// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Data = styled.span`
  margin-left: 0.5em;
`;

type Props = {
  boat: Object
};

const BoatMeasures = ({ boat }: Props) => (
  <Row>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_width" />:
      <Data>{boat.width}m</Data>
    </Col>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_length" />:
      <Data>{boat.length}m</Data>
    </Col>
  </Row>
);

export default BoatMeasures;
