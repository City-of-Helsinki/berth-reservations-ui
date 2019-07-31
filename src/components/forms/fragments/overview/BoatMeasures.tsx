import React from 'react';
import { Col, Row } from 'reactstrap';

import { stringToFloat } from '../../../../utils/berths';
import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';

import './Form.scss';

interface Props {
  width: string;
  length: string;
}

const BoatMeasures = ({ width, length }: Props) => (
  <Row>
    <Col md={6}>
      <LabelValuePair label="page.overview.info.boat_width" value={`${stringToFloat(width)}m`} />
    </Col>
    <Col md={6}>
      <LabelValuePair label="page.overview.info.boat_length" value={`${stringToFloat(length)}m`} />
    </Col>
  </Row>
);

export default BoatMeasures;
