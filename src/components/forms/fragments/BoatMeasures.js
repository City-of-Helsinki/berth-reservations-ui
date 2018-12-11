// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';

import { Number } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';
import { mustBeNumber } from '../../../utils/formValidation';

const RegisteredBoatFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={3}>
      <Number
        noValidate={noValidate}
        validate={mustBeNumber}
        name={`${prefix}.width`}
        label="form.registered.field.width.label"
        placeholder="form.registered.field.width.placeholder"
        append="m"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        noValidate={noValidate}
        validate={mustBeNumber}
        name={`${prefix}.length`}
        label="form.registered.field.length.label"
        placeholder="form.registered.field.length.placeholder"
        append="m"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        noValidate={noValidate}
        validate={mustBeNumber}
        name={`${prefix}.draught`}
        label="form.registered.field.draught.label"
        placeholder="form.registered.field.draught.placeholder"
        append="m"
        required
      />
    </Col>
    <Col sm={3}>
      <Number
        noValidate={noValidate}
        validate={mustBeNumber}
        name={`${prefix}.weight`}
        step={100}
        label="form.registered.field.weight.label"
        placeholder="form.registered.field.weight.placeholder"
        append="kg"
        required
      />
    </Col>
  </Row>
);

export default RegisteredBoatFragment;
