// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';
import { Text } from '../Fields';
import { BoatType } from '../Selects';

import type { FormFragmentProps } from '../../../types/form';
import type { WithBoatType } from '../Selects';

const RegisteredBoatDetailsFragment = ({ prefix, boatTypes }: FormFragmentProps & WithBoatType) => (
  <Row>
    <Col sm={6}>
      <Text
        name={`${prefix}.register_number`}
        label="form.registered.field.register_number.label"
        placeholder="form.registered.field.register_number.placeholder"
        required
      />
    </Col>
    <Col sm={6}>
      <BoatType required prefix={prefix} boatTypes={boatTypes} />
    </Col>
  </Row>
);

export default RegisteredBoatDetailsFragment;
