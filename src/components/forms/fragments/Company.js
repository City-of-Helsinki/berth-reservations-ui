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

const CompanyForm = () => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="form.company.title" />
    <Row>
      <Col sm={5}>
        <Text
          id="form.company.company_name"
          name="company.companyName"
          label="form.company.field.name.label"
          placeholder="form.company.field.name.placeholder"
        />
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <Text
          id="form.company.business_id"
          name="company.businessId"
          label="form.company.field.business_id.label"
          placeholder="form.company.field.business_id.placeholder"
        />
      </Col>
    </Row>
    <PostalDetails prefix="company" />
    <FormattedMessage tagName="h3" id="form.company.contact_person" />
    <FullName prefix="company" />
    <ContactDetails prefix="company" />
  </Container>
);

export default CompanyForm;
