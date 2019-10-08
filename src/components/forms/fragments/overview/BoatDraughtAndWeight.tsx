import React from 'react';
import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';

interface Props {
  draught?: string | null;
  weight?: string | null;
}

const BoatDraughtAndWeight = ({ draught, weight }: Props) => (
  <Row>
    <Col md={6}>
      <LabelValuePair label="page.overview.info.boat_draught" value={`${draught}m`} />
    </Col>
    <Col md={6}>
      <LabelValuePair label="page.overview.info.boat_weight" value={`${weight}`} />
    </Col>
  </Row>
);

export default BoatDraughtAndWeight;
