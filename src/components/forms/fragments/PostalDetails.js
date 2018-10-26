// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

export default ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text name={`${prefix}.street_address`} label={`form.${prefix}.street_address.label`} />
    </Col>
    <Col sm={4}>
      <Text name={`${prefix}.postal_code`} label={`form.${prefix}.postal_code.label`} />
    </Col>
    <Col sm={4}>
      <Text name={`${prefix}.munacipality`} label={`form.${prefix}.munacipality.label`} />
    </Col>
  </Row>
);
