// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const BoatInfoFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        name={`${prefix}.name`}
        label="form.registered.field.name.label"
        placeholder="form.registered.field.name.placeholder"
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        name={`${prefix}.model`}
        label="form.registered.field.model.label"
        placeholder="form.registered.field.model.placeholder"
        required
      />
    </Col>
  </Row>
);

export default BoatInfoFragment;
