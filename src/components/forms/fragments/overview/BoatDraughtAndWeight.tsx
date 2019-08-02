import React from 'react';
import { Col, Row } from 'reactstrap';

import { stringToFloat } from '../../../../utils/berths';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';

interface Props {
  draught: string;
  weight: string;
}

const BoatDraughtAndWeight = ({ draught, weight }: Props) => (
  <Row>
    <Col md={6}>
      <LabelValuePair
        label="page.overview.info.boat_draught"
        value={`${stringToFloat(draught)}m`}
      />
    </Col>
    <Col md={6}>
      <LabelValuePair label="page.overview.info.boat_weight" value={`${stringToFloat(weight)}`} />
    </Col>
  </Row>
);

export default BoatDraughtAndWeight;
