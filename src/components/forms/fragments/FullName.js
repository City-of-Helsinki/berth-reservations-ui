// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

export default ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text name={`${prefix}.first_name`} label="form.private_person.first_name.label" required />
    </Col>
    <Col sm={4}>
      <Text name={`${prefix}.last_name`} label="form.private_person.last_name.label" required />
    </Col>
  </Row>
);
