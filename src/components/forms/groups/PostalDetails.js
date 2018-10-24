import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';

export default ({ prefix }) => (
  <Row>
    <Col sm={4}>
      <Text
        id={`${prefix}.streetAddress`}
        name={`${prefix}.streetAddress`}
        label={`page.${prefix}.form.street_address.label`}
      />
    </Col>
    <Col sm={4}>
      <Text
        id={`${prefix}.postalCode`}
        name={`${prefix}.postalCode`}
        label={`page.${prefix}.form.postal_code.label`}
      />
    </Col>
    <Col sm={4}>
      <Text
        id={`${prefix}.munacipality`}
        name={`${prefix}.munacipality`}
        label={`form.${prefix}.form.munacipality.label`}
      />
    </Col>
  </Row>
);
