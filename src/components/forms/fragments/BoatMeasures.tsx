import React from 'react';
import { Row, Col } from 'reactstrap';

import { Number } from '../Fields';

import { mustBePositiveNumber } from '../../../utils/formValidation';

const RegisteredBoatFragment = () => (
  <Row>
    <Col sm={3}>
      <Number
        validate={mustBePositiveNumber}
        name={`boat_width`}
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
        name={`boat_length`}
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
        name={`boat_draught`}
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
        name={`boat_weight`}
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
