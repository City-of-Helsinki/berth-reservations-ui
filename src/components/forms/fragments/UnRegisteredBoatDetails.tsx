import React from 'react';
import { Col, Row } from 'reactstrap';

import { mustBePositiveNumber } from '../../../utils/formValidation';
import { Number } from '../Fields';
import { BoatType, WithBoatType } from '../Selects';

const UnRegisteredBoatDetailsFragment = ({
  fieldsNotRequired,
  boatTypes
}: WithBoatType & {
  fieldsNotRequired?: boolean;
}) => (
  <Row>
    <Col sm={4}>
      <BoatType boatTypes={boatTypes} required={!fieldsNotRequired} />
    </Col>
    <Col sm={4}>
      <Number
        validate={mustBePositiveNumber}
        name={`boatWidth`}
        label="form.no_boat.field.width.label"
        placeholder="form.no_boat.field.width.placeholder"
        append="m"
        min="0"
        step="0.5"
        required={!fieldsNotRequired}
      />
    </Col>
    <Col sm={4}>
      <Number
        validate={mustBePositiveNumber}
        name={`boatLength`}
        label="form.no_boat.field.length.label"
        placeholder="form.no_boat.field.length.placeholder"
        append="m"
        min="0"
        step="0.5"
        required={!fieldsNotRequired}
      />
    </Col>
  </Row>
);

export default UnRegisteredBoatDetailsFragment;
