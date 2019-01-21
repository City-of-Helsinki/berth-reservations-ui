// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';
import { Text } from '../Fields';
import { BoatType } from '../Selects';

import type { WithBoatType } from '../Selects';

const RegisteredBoatDetailsFragment = ({ boatTypes }: WithBoatType) => (
  <Row>
    <Col sm={6}>
      <Text
        name={`boat_registration_number`}
        label="form.registered.field.register_number.label"
        placeholder="form.registered.field.register_number.placeholder"
        required
      />
    </Col>
    <Col sm={6}>
      <BoatType required boatTypes={boatTypes} />
    </Col>
  </Row>
);

export default RegisteredBoatDetailsFragment;
