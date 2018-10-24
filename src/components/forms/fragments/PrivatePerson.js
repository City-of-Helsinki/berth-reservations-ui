// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { FormattedMessage } from 'react-intl';

import { Text } from '../Fields';

import FullName from '../groups/FullName';
import PostalDetails from '../groups/PostalDetails';
import ContactDetails from '../groups/ContactDetails';

export const schema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  ssn: Joi.string().required(),
  streetAddress: Joi.string(),
  postalCode: Joi.number(),
  munacipality: Joi.string(),
  mobilePhone: Joi.string().required(),
  email: Joi.string().required()
});

const PrivatePersonForm = () => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="form.person.person_info" />
    <FullName prefix="person" />
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
    <PostalDetails prefix="person" />
    <ContactDetails prefix="person" />
  </Container>
);

export default PrivatePersonForm;
