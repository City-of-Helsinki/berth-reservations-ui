// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';

import { Number } from '../Fields';
import { BoatType } from '../Selects';
import type { FormFragmentProps } from '../../../types/form';
import { mustBeNumber } from '../../../utils/formValidation';
import type { WithBoatType } from '../Selects';

const UnRegisteredBoatDetailsFragment = ({
  prefix,
  noValidate = false,
  boatTypes
}: FormFragmentProps & WithBoatType) => (
  <Row>
    <Col sm={4}>
      <BoatType prefix={prefix} noValidate={noValidate} boatTypes={boatTypes} />
    </Col>
    <Col sm={4}>
      <Number
        noValidate={noValidate}
        validate={mustBeNumber}
        name={`${prefix}.width`}
        label="form.no_boat.field.width.label"
        placeholder="form.no_boat.field.width.placeholder"
        append="m"
        min="0"
        parse={value => Math.max(0, parseFloat(value)).toString()}
        required
      />
    </Col>
    <Col sm={4}>
      <Number
        noValidate={noValidate}
        validate={mustBeNumber}
        name={`${prefix}.length`}
        label="form.no_boat.field.length.label"
        placeholder="form.no_boat.field.length.placeholder"
        append="m"
        min="0"
        parse={value => Math.max(0, parseFloat(value)).toString()}
        required
      />
    </Col>
  </Row>
);

export default UnRegisteredBoatDetailsFragment;
