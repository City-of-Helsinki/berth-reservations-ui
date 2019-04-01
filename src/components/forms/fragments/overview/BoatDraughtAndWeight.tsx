import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Data = styled.span`
  margin-left: 0.5em;
`;

interface Props {
  draught: number;
  weight: number;
}

const BoatDraughtAndWeight = ({ draught, weight }: Props) => (
  <Row>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_draught" />:
      <Data>{draught}m</Data>
    </Col>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_weight" />:<Data>{weight}</Data>
      kg
    </Col>
  </Row>
);

export default BoatDraughtAndWeight;
