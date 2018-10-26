// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { Text } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

export default ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text
        name={`${prefix}.mobile_phone`}
        label={`form.${prefix}.field.mobile_phone.label`}
        required
      />
    </Col>
    <Col sm={4}>
      <Text name={`${prefix}.email`} label={`form.${prefix}.email.label`} required />
    </Col>
  </Row>
);
