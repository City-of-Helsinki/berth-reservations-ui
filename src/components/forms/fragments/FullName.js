// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

export default ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text name={`${prefix}.firstName`} label={`form.${prefix}.first_name.label`} required />
    </Col>
    <Col sm={4}>
      <Text name={`${prefix}.lastName`} label={`form.${prefix}.last_name.label`} required />
    </Col>
  </Row>
);
