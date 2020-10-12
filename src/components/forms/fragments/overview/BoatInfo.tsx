import React from 'react';
import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';

interface Props {
  name?: string | null;
  registerNumber?: string | null;
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
