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
  company: Joi.object().keys({
    name: Joi.string().required(),
    businessId: Joi.string().required(),
    ssn: Joi.string().required(),
    postal: postalDetailsSchema.required(),
    fullName: fullNameSchema.required(),
    contact: contactDetailsSchema.required()
  })
});

const CompanyForm = () => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="form.company.title" />
    <Row>
      <Col sm={5}>
        <Text
          id="form.company.company_name"
          name="company.name"
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
    <PostalDetails prefix="company.postal" />
    <FormattedMessage tagName="h3" id="form.company.contact_person" />
    <FullName prefix="company.fullName" />
    <ContactDetails prefix="company.contact" />
  </Container>
);

export default CompanyForm;
