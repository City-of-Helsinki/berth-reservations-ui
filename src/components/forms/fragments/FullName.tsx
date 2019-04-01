import React from 'react';
import { Col, Row } from 'reactstrap';

import { Text } from '../Fields';

const FullNameFragment = () => (
  <Row>
    <Col sm={4}>
      <Text
        name={`first_name`}
        label="form.private_person.field.first_name.label"
        placeholder="form.private_person.field.first_name.placeholder"
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        name={`last_name`}
        label="form.private_person.field.last_name.label"
        placeholder="form.private_person.field.last_name.placeholder"
        required
      />
    </Col>
  </Row>
);

export default FullNameFragment;
