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
  const boatType = boatTypes && boatTypes.find(type => !!type && type.id === boatTypeId);

  return (
    <Row>
      <Col md={boatModel ? 6 : 12}>
        <div className="vene-overview-info__boat-info">
          <FormattedMessage tagName="span" id="page.overview.info.boat_type" />
          <span>:</span>
          <span className="vene-form__data">{boatType ? boatType.name : '-'}</span>
        </div>
      </Col>
      {boatModel && (
        <Col md={6}>
          <div className="vene-overview-info__boat-info">
            <FormattedMessage tagName="span" id="page.overview.info.boat_model" />
            <span>:</span>
            <span className="vene-form__data">{boatModel}</span>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default injectIntl(BoatTypeAndModel);
