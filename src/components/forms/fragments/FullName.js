import React from 'react';
import { Row, Col } from 'reactstrap';
import Joi from 'joi';

import { Text } from '../Fields';

export const schema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required()
});

export default ({ prefix }) => (
  <Row>
    <Col sm={4}>
      <Text
        id={`${prefix}.firstName`}
        name={`${prefix}.firstName`}
        label={`form.${prefix}.first_name.label`}
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        id={`${prefix}.lastName`}
        name={`${prefix}.lastName`}
        label={`form.${prefix}.last_name.label`}
        required
      />
    </Col>
  </Row>
);
