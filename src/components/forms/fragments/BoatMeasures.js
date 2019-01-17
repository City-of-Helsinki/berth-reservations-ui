// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';

import { Number } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';
import { mustBePositiveNumber } from '../../../utils/formValidation';

const RegisteredBoatFragment = ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={3}>
      <Number
        validate={mustBePositiveNumber}
        name={`${prefix}.width`}
        label="form.registered.field.width.label"
        placeholder="form.registered.field.width.placeholder"
        append="m"
        min="0"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        validate={mustBePositiveNumber}
        name={`${prefix}.length`}
        label="form.registered.field.length.label"
        placeholder="form.registered.field.length.placeholder"
        append="m"
        min="0"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        validate={mustBePositiveNumber}
        name={`${prefix}.draught`}
        label="form.registered.field.draught.label"
        placeholder="form.registered.field.draught.placeholder"
        append="m"
        min="0"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        validate={mustBePositiveNumber}
        name={`${prefix}.weight`}
        step={100}
        label="form.registered.field.weight.label"
        placeholder="form.registered.field.weight.placeholder"
        append="kg"
        min="0"
        required
      />
    </Col>
  </Row>
);

export default RegisteredBoatFragment;
