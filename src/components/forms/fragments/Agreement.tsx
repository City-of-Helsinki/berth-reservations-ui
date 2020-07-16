import React from 'react';
import { Col, Row } from 'reactstrap';

import { Checkbox } from '../Fields';

interface Props {
  label: JSX.Element;
}

const Agreement = ({ label }: Props) => (
  <Row>
    <Col sm={10}>
      <Checkbox name={`informationAccuracyConfirmed`} label={label} required />
    </Col>
  </Row>
);

export default Agreement;
