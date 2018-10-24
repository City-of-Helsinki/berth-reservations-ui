// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { FormattedMessage } from 'react-intl';

import { Text } from '../Fields';

import FullName, { schema as fullNameSchema } from '../groups/FullName';
import PostalDetails, { schema as postalDetailsSchema } from '../groups/PostalDetails';
import ContactDetails, { schema as contactDetailsSchema } from '../groups/ContactDetails';

export const schema = Joi.object().keys({
  person: Joi.object()
    .keys({
      name: fullNameSchema.required(),
      ssn: Joi.string().required(),
      postal: postalDetailsSchema.required(),
      contact: contactDetailsSchema.required()
    })
    .required()
});

const PrivatePersonForm = () => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="form.person.person_info" />
    <FullName prefix="person.name" />
    <Row>
      <Col sm={3}>
        <Text
          id="form.person.ssn"
          name="person.ssn"
          label="form.person.field.ssn.label"
          placeholder="form.person.field.ssn.placeholder"
        />
      </Col>
    </Row>
    <PostalDetails prefix="person.postal" />
    <ContactDetails prefix="person.contact" />
  </Container>
);

export default PrivatePersonForm;
