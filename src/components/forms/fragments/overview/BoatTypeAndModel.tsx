import React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Row } from 'reactstrap';
import { WithBoatType } from '../../Selects';
import './Form.scss';

type Props = {
  boatTypeId: string;
  boatModel: string;
} & WithBoatType &
  InjectedIntlProps;

const BoatTypeAndModel = ({ boatTypeId, boatModel, boatTypes }: Props) => {
  const boatType = boatTypes.find(type => type.identifier === boatTypeId);

  return (
    <Row>
      <Col md={boatModel ? 6 : 12}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_type" />:
        {boatType && <span className="app-form__data">{boatType.name}</span>}
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
