// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Data = styled.span`
  margin-left: 0.5em;
`;

type Props = {
  name: String,
  registerNumber: String
};

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
