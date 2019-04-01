import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Data = styled.span`
  margin-left: 0.5em;
`;

interface Props {
  name: string;
  registerNumber: string;
}

const BoatInfo = ({ name, registerNumber }: Props) => (
  <Row>
    <Col md={registerNumber ? 6 : 12}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_name" />:<Data>{name}</Data>
    </Col>
    {registerNumber && (
      <Col md={6}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_register_number" />:
        <Data>{registerNumber}</Data>
      </Col>
    )}
  </Row>
);

export default BoatInfo;
