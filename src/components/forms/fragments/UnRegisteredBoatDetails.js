// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';

import { BoatType, Number } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';
import { mustBeNumber } from '../../../utils/formValidation';

const UnRegisteredBoatDetailsFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <BoatType prefix={prefix} noValidate={noValidate} />
    </Col>
    <Col sm={4}>
      <Number
        noValidate={noValidate}
        validate={mustBeNumber}
        name={`${prefix}.width`}
        label="form.no_boat.field.width.label"
        append="m"
        required
      />
    </Col>
    <Col sm={4}>
      <Number
        noValidate={noValidate}
        validate={mustBeNumber}
        name={`${prefix}.length`}
        label="form.no_boat.field.length.label"
        append="m"
        required
      />
    </Col>
  </Row>
);

export default UnRegisteredBoatDetailsFragment;
