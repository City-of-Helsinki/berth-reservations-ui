// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { FormattedMessage } from 'react-intl';

import { Text } from '../Fields';

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
    <FormattedMessage tagName="h3" id="form.company.section.person_info" />
    <Row>
      <Col sm={5}>
        <Text
          id="CompanyName"
          name="CompanyName"
          label="form.company.companyName.label"
          placeholder="form.company.companyName.placeholder"
          required
        />
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <Text
          id="businessId"
          name="businessId"
          label="form.company.businessId.label"
          placeholder="form.company.businessId.placeholder"
          required
        />
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <Text
          id="ssn"
          name="ssn"
          label="form.company.ssn.label"
          placeholder="form.company.ssn.placeholder"
        />
      </Col>
      <Col sm={2}>
        <Text id="streetAddress" name="streetAddress" label="form.company.street_address.label" />
      </Col>
      <Col sm={5}>
        <Text id="postalCode" name="postalCode" label="form.company.postal_code.label" />
      </Col>
    </Row>

    <Row>
      <Col sm={4}>
        <Text id="streetAddress" name="streetAddress" label="form.company.street_address.label" />
      </Col>
      <Col sm={4}>
        <Text id="postalCode" name="postalCode" label="form.company.postal_code.label" />
      </Col>
      <Col sm={4}>
        <Text id="munacipality" name="munacipality" label="form.company.munacipality.label" />
      </Col>
    </Row>
    <Row>
      <Col sm={4}>
        <Text
          id="mobilePhone"
          name="mobilePhone"
          label="form.company.mobile_phone.label"
          required
        />
      </Col>
      <Col sm={4}>
        <Text id="email" name="email" label="form.company.email.label" required />
      </Col>
    </Row>
  </Container>
);

export default CompanyForm;
