// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const FullNameFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        name={`${prefix}.first_name`}
        label="form.private_person.field.first_name.label"
        placeholder="form.private_person.field.first_name.placeholder"
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        name={`${prefix}.last_name`}
        label="form.private_person.field.last_name.label"
        placeholder="form.private_person.field.last_name.placeholder"
        required
      />
    </Col>
  </Row>
);

export default FullNameFragment;
