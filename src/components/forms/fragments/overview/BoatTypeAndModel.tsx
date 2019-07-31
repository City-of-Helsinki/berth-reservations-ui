import React from 'react';
import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import { WithBoatType } from '../../Selects';

import './Form.scss';

type Props = {
  boatTypeId: string;
  boatModel: string;
} & WithBoatType;

const BoatTypeAndModel = ({ boatTypeId, boatModel, boatTypes }: Props) => {
  const boatType = boatTypes && boatTypes.find(type => !!type && type.id === boatTypeId);

  return (
    <Row>
      <Col md={boatModel ? 6 : 12}>
        <LabelValuePair label="page.overview.info.boat_type" value={boatType && boatType.name} />
      </Col>
      {boatModel && (
        <Col md={6}>
          <LabelValuePair label="page.overview.info.boat_model" value={boatModel} />
        </Col>
      )}
    </Row>
  );
};

export default BoatTypeAndModel;
