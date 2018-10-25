import React from 'react';
import { Row, Col } from 'reactstrap';
import Joi from 'joi';

import { Text } from '../Fields';

export const schema = Joi.object().keys({
  mobilePhone: Joi.string().required(),
  email: Joi.string().required()
});

export default ({ prefix }) => (
  <Row>
    <Col sm={4}>
      <Text
        id={`${prefix}.mobilePhone`}
        name={`${prefix}.mobilePhone`}
        label={`form.${prefix}.field.mobile_phone.label`}
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        id={`${prefix}.field.email`}
        name={`${prefix}.email`}
        label={`form.${prefix}.email.label`}
        required
      />
    </Col>
  </Row>
);
