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
  boatTypeId: String,
  boatModel: String,
  intl: any
} & WithBoatType;

const BoatTypeAndModel = ({ boatTypeId, boatModel, boatTypes, intl: { locale } }: Props) => {
  const boatType = boatTypes.find(type => type.identifier === boatTypeId);

  return (
    <Row>
      <Col md={boatModel ? 6 : 12}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
        <Data>{boatType.name[locale]}</Data>
      </Col>
      {boatModel && (
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_model" />:
          <Data>{boatModel}</Data>
        </Col>
      )}
    </Row>
  );
};

export default injectIntl(BoatTypeAndModel);
