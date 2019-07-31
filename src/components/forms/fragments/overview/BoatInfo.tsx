import React from 'react';
import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';

import './Form.scss';

interface Props {
  name: string;
  registerNumber: string;
}

const BoatInfo = ({ name, registerNumber }: Props) => (
  <Row>
    <Col md={registerNumber ? 6 : 12}>
      <LabelValuePair label="page.overview.info.boat_name" value={name} />
    </Col>
    {registerNumber && (
      <Col md={6}>
        <LabelValuePair label="page.overview.info.boat_register_number" value={registerNumber} />
      </Col>
    )}
  </Row>
);

export default BoatInfo;
