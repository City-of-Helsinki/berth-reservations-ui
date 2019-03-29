import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';

const BoatInfoFragment = () => (
  <Row>
    <Col sm={4}>
      <Text
        name={`boat_name`}
        label="form.registered.field.name.label"
        placeholder="form.registered.field.name.placeholder"
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        name={`boat_model`}
        label="form.registered.field.model.label"
        placeholder="form.registered.field.model.placeholder"
        required
      />
    </Col>
  </Row>
);

export default BoatInfoFragment;
