// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const FullNameFragment = ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text
        name={`${prefix}.first_name`}
        label="form.private_person.field.first_name.label"
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        name={`${prefix}.last_name`}
        label="form.private_person.field.last_name.label"
        required
      />
    </Col>
  </Row>
);

export default FullNameFragment;
