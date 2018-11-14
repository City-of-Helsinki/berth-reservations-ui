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

const BoatDraughtAndWeight = ({ boat }: Props) => (
  <Row>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_draught" />:
      <Data>{boat.draught}m</Data>
    </Col>
    <Col md={6}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_weight" />:
      <Data>{boat.weight}</Data>
      kg
    </Col>
  </Row>
);

export default BoatDraughtAndWeight;
