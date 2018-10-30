// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';

import { Number } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';
import { mustBeNumber } from '../../../utils/formValidation';

const RegisteredBoatFragment = ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={3}>
      <Number
        validate={mustBeNumber}
        name={`${prefix}.width`}
        label="form.registered.field.width.label"
        append="m"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        validate={mustBeNumber}
        name={`${prefix}.length`}
        label="form.registered.field.length.label"
        append="m"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        validate={mustBeNumber}
        name={`${prefix}.draught`}
        label="form.registered.field.draught.label"
        append="m"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        validate={mustBeNumber}
        name={`${prefix}.weight`}
        label="form.registered.field.weight.label"
        append="kg"
        required
      />
    </Col>
  </Row>
);

export default RegisteredBoatFragment;
