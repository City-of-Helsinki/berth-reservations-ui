import React from 'react';
import { Col, Row } from 'reactstrap';

import { Checkbox } from '../Fields';

const ContactByFragment = () => (
  <Row>
    <Col sm={6}>
      <Checkbox
        name={`informationAccuracyConfirmed`}
        label="form.overview.field.guarantee.label"
        required
      />
    </Col>
  </Row>
);

export default ContactByFragment;