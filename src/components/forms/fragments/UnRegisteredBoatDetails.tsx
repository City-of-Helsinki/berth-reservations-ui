// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';

import { Number } from '../Fields';
import { BoatType } from '../Selects';
import { mustBePositiveNumber } from '../../../utils/formValidation';
import type { WithBoatType } from '../Selects';

const UnRegisteredBoatDetailsFragment = ({
  fieldsNotRequired,
  boatTypes
}: WithBoatType & {
  fieldsNotRequired?: boolean
}) => (
  <Row>
    <Col sm={4}>
      <BoatType boatTypes={boatTypes} required={!fieldsNotRequired} />
    </Col>
    <Col sm={4}>
      <Number
        validate={mustBePositiveNumber}
        name={`boat_width`}
        label="form.no_boat.field.width.label"
        placeholder="form.no_boat.field.width.placeholder"
        append="m"
        min="0"
        required={!fieldsNotRequired}
      />
    </Col>
    <Col sm={4}>
      <Number
        validate={mustBePositiveNumber}
        name={`boat_length`}
        label="form.no_boat.field.length.label"
        placeholder="form.no_boat.field.length.placeholder"
        append="m"
        min="0"
        required={!fieldsNotRequired}
      />
    </Col>
  </Row>
);

export default UnRegisteredBoatDetailsFragment;
