// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage } from 'react-intl';

import { Text, Number } from '../Fields';

import RegistrationAdditionalInfo, {
  registrationAdditionalInfoSchema
} from './RegistrationAdditionalInfo';

export const schema = Joi.object().keys({
  type: Joi.string().required(),
  width: Joi.number().required(),
  length: Joi.number().required(),
  ...registrationAdditionalInfoSchema
});

const UnRegisteredBoatForm = () => (
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
        <Number id="width" name="width" label="form.unregistered.width.label" append="m" required />
      </Col>
      <Col sm={3}>
        <Number
          id="length"
          name="length"
          label="form.unregistered.lenght.label"
          append="m"
          required
        />
      </Col>
    </Row>
    <RegistrationAdditionalInfo />
  </Container>
);

export default injectIntl(UnRegisteredBoatForm);
