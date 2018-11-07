// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';
import { Text, BoatType } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

const RegisteredBoatDetailsFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={6}>
      <Text
        noValidate={noValidate}
        name={`${prefix}.register_number`}
        label="form.registered.field.register_number.label"
        placeholder="form.registered.field.register_number.placeholder"
        required
      />
    </Col>
    <Col sm={6}>
      <BoatType prefix={prefix} noValidate={noValidate} />
    </Col>
  </Row>
);

export default RegisteredBoatDetailsFragment;
