// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { type WithBoatType } from '../../Selects';

const Data = styled.span`
  margin-left: 0.5em;
`;

type Props = {
  boat: Object,
  intl: any
} & WithBoatType;

const BoatTypeAndModel = ({ boat, boatTypes, intl: { locale } }: Props) => {
  const boatType = boatTypes.find(type => type.identifier === boat.type);
  return (
    <Row>
      <Col md={boat.model ? 6 : 12}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
        <Data>{boatType.name[locale]}</Data>
      </Col>
      {boat.model && (
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_model" />:
          <Data>{boat.model}</Data>
        </Col>
      )}
    </Row>
  );
};

export default injectIntl(BoatTypeAndModel);
