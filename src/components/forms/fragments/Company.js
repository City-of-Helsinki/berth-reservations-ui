// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { FormattedMessage } from 'react-intl';

import { Text } from '../Fields';

import FullName, { schema as fullNameSchema } from './FullName';
import PostalDetails, { schema as postalDetailsSchema } from './PostalDetails';
import ContactDetails, { schema as contactDetailsSchema } from './ContactDetails';

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

type Props = {
  prefix: string
};

const CompanyForm = ({ prefix }: Props) => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="form.company.title" />
    <Row>
      <Col sm={5}>
        <Text
          id="form.company.company_name"
          name={`${prefix}.name`}
          label="form.company.field.name.label"
          placeholder="form.company.field.name.placeholder"
        />
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <Text
          id="form.company.business_id"
          name={`${prefix}.businessId`}
          label="form.company.field.business_id.label"
          placeholder="form.company.field.business_id.placeholder"
        />
      </Col>
    </Row>
    <PostalDetails prefix={prefix} />
    <FormattedMessage tagName="h3" id="form.company.contact_person" />
    <FullName prefix={prefix} />
    <ContactDetails prefix={prefix} />
  </Container>
);

export default CompanyForm;
