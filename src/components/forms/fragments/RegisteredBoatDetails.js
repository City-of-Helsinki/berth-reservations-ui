// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';
import { Text, BoatType } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

const RegisteredBoatDetailsFragment = ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={6}>
      <Text
        name={`${prefix}.register_number`}
        label="form.registered.field.register_number.label"
        placeholder="form.registered.field.register_number.placeholder"
        required
      />
    </Col>
    <Col sm={6}>
      <BoatType />
    </Col>
  </Row>
);

export default RegisteredBoatDetailsFragment;
