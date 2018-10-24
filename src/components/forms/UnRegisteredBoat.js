// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Text } from './fields/InputField';
import InputGroup from './fields/InputGroup';

import RegistrationAdditionalInfo, {
  registrationAdditionalInfo
} from './partials/RegistrationAdditionalInfo';

type Props = {
  onSubmit: Function,
  initialValues: Object
};

const schema = Joi.object().keys({
  type: Joi.string().required(),
  width: Joi.number().required(),
  length: Joi.number().required(),
  ...registrationAdditionalInfo
});

const UnRegisteredBoatForm = ({ onSubmit, initialValues }: Props) => (
  <Form
    onSubmit={formData => onSubmit(formData)}
    initialValues={initialValues}
    validate={validation(schema)}
  >
    {({ reset, submitting, pristine }) => (
      <Container fluid>
        {' '}
        <FormattedMessage tagName="h3" id="form.unregistered.header.title" />
        <Row>
          <Col sm={6}>
            <Text
              id="type"
              name="type"
              label="form.unregistered.type.label"
              placeholder="form.unregistered.type.placeholder"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="width"
              name="width"
              label="form.unregistered.width.label"
              append="m"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="length"
              name="length"
              label="form.unregistered.lenght.label"
              append="m"
              required
            />
          </Col>
        </Row>
        <RegistrationAdditionalInfo />
        <hr />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={reset}
          disabled={submitting || pristine}
        >
          <FormattedMessage id="page.boat.form.action.reset_form" />
        </button>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          <FormattedMessage id="page.boat.form.action.next_page" />
        </button>
      </Container>
    )}
  </Form>
);

export default injectIntl(UnRegisteredBoatForm);
