import React from 'react';
import { Row, Col } from 'reactstrap';
import Joi from 'joi';

import { Text } from '../Fields';

export const schema = Joi.object().keys({
  streetAddress: Joi.string().required(),
  postalCode: Joi.string().required(),
  munacipality: Joi.string().required()
});

export default ({ prefix }) => (
  <Row>
    <Col sm={4}>
      <Text
        id={`${prefix}.streetAddress`}
        name={`${prefix}.streetAddress`}
        label={`form.${prefix}.street_address.label`}
      />
    </Col>
    <Col sm={4}>
      <Text
        id={`${prefix}.postalCode`}
        name={`${prefix}.postalCode`}
        label={`form.${prefix}.postal_code.label`}
      />
    </Col>
    <Col sm={4}>
      <Text
        id={`${prefix}.munacipality`}
        name={`${prefix}.munacipality`}
        label={`form.${prefix}.munacipality.label`}
      />
    </Col>
  </Row>
);
