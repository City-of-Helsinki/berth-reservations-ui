// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import { type WithBoatType } from '../../Selects';
import './_data.scss';

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
        <span className="app-form__data">{boatType.name[locale]}</span>
      </Col>
      {boatModel && (
        <Col md={6}>
          <FormattedMessage tagName="span" id="page.overview.info.boat_model" />:
          <span className="app-form__data">{boatModel}</span>
        </Col>
      )}
    </Row>
  );
};

export default injectIntl(BoatTypeAndModel);
