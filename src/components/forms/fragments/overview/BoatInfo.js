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

const BoatInfo = ({ boat }: Props) => (
  <Row>
    <Col md={boat.register_number ? 6 : 12}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_name" />:<Data>{boat.name}</Data>
    </Col>
    {boat.register_number && (
      <Col md={6}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_register_number" />:
        <Data>{boat.register_number}</Data>
      </Col>
    )}
  </Row>
);

export default BoatInfo;
