import React from 'react';
import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';

interface Props {
  width?: string | null;
  length?: string | null;
}

const BoatMeasures = ({ width, length }: Props) => (
  <Row>
    <Col md={6}>
      <LabelValuePair label="page.overview.info.boat_width" value={`${width}m`} />
    </Col>
    <Col md={6}>
      <LabelValuePair label="page.overview.info.boat_length" value={`${length}m`} />
    </Col>
  </Row>
);

export default BoatMeasures;
