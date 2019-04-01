import React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { WithBoatType } from '../../Selects';

const Data = styled.span`
  margin-left: 0.5em;
`;

type Props = {
  boatTypeId: string;
  boatModel: string;
} & WithBoatType &
  InjectedIntlProps;

const BoatTypeAndModel = ({ boatTypeId, boatModel, boatTypes, intl: { locale } }: Props) => {
  const boatType = boatTypes.find(type => type.identifier === boatTypeId);

  return (
    <Row>
      <Col md={boatModel ? 6 : 12}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
        <Data>{boatType && boatType.name[locale]}</Data>
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
