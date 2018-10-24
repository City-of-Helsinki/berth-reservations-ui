// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { FormattedMessage } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Text } from './fields/InputField';

type Props = {
  onSubmit: Function,
  initialValues: Object
};

const schema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  ssn: Joi.string().required(),
  streetAddress: Joi.string(),
  postalCode: Joi.number(),
  munacipality: Joi.string(),
  mobilePhone: Joi.string().required(),
  email: Joi.string().required()
});

const PrivatePersonForm = ({ onSubmit, initialValues }: Props) => (
  <Form
    onSubmit={formData => onSubmit(formData)}
    initialValues={initialValues}
    validate={validation(schema)}
  >
    {({ reset, submitting, pristine }) => (
      <Container fluid>
        <FormattedMessage tagName="h3" id="page.person.form.section.person_info" />
        <Row>
          <Col sm={6}>
            <Text
              id="firstName"
              name="firstName"
              label="page.person.form.first_name.label"
              placeholder="page.person.form.first_name.placeholder"
              required
            />
          </Col>
          <Col sm={6}>
            <Text
              id="lastName"
              name="lastName"
              label="page.person.form.last_name.label"
              placeholder="page.person.form.last_name.placeholder"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Text
              id="ssn"
              name="ssn"
              label="page.person.form.ssn.label"
              placeholder="page.person.form.ssn.placeholder"
            />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Text
              id="streetAddress"
              name="streetAddress"
              label="page.person.form.street_address.label"
            />
          </Col>
          <Col sm={4}>
            <Text id="postalCode" name="postalCode" label="page.person.form.postal_code.label" />
          </Col>
          <Col sm={4}>
            <Text
              id="munacipality"
              name="munacipality"
              label="page.person.form.munacipality.label"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Text
              id="mobilePhone"
              name="mobilePhone"
              label="page.person.form.mobile_phone.label"
              required
            />
          </Col>
          <Col sm={4}>
            <Text id="email" name="email" label="page.person.form.email.label" required />
          </Col>
        </Row>

        <hr />

        <button
          type="button"
          className="btn btn-secondary"
          onClick={reset}
          disabled={submitting || pristine}
        >
          <FormattedMessage id="page.person.form.action.reset_form" />
        </button>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          <FormattedMessage id="page.person.form.action.next_page" />
        </button>
      </Container>
    )}
  </Form>
);

export default PrivatePersonForm;
