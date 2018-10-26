import React from 'react';
import { Row, Col } from 'reactstrap';
import { Text } from '../Fields';

export default ({ prefix }) => (
  <Row>
    <Col sm={4}>
      <Text
        name={`${prefix}.mobilePhone`}
        label={`form.${prefix}.field.mobile_phone.label`}
        required
      />
    </Col>
    <Col sm={4}>
      <Text name={`${prefix}.email`} label={`form.${prefix}.email.label`} required />
    </Col>
  </Row>
);
