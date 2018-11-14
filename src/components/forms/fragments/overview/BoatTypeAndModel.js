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

const BoatTypeAndModel = ({ boat }: Props) => (
  <Row>
    <Col md={boat.model ? 6 : 12}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:<Data>{boat.type}</Data>
    </Col>
    {boat.model && (
      <Col md={6}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_model" />:
        <Data>{boat.model}</Data>
      </Col>
    )}
  </Row>
);

export default BoatTypeAndModel;
