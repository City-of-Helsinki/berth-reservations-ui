// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage } from 'react-intl';

import { Text, Number } from '../Fields';

import RegistrationAdditionalInfo, {
  schema as registrationAdditionalInfoSchema
} from './RegistrationAdditionalInfo';

export const schema = Joi.object()
  .keys({
    type: Joi.string().required(),
    width: Joi.number().required(),
    length: Joi.number().required()
  })
  .concat(registrationAdditionalInfoSchema);

type Props = {
  prefix: string
};

const UnRegisteredBoatForm = ({ prefix }: Props) => (
  <Container fluid>
    {' '}
    <FormattedMessage tagName="h3" id="form.unregistered.header.title" />
    <Row>
      <Col sm={6}>
        <Text
          id="type"
          name={`${prefix}.type`}
          label="form.unregistered.type.label"
          placeholder="form.unregistered.type.placeholder"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          id="width"
          name={`${prefix}.width`}
          label="form.unregistered.width.label"
          append="m"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          id="length"
          name={`${prefix}.length`}
          label="form.unregistered.lenght.label"
          append="m"
          required
        />
      </Col>
    </Row>
    <RegistrationAdditionalInfo prefix={prefix} />
  </Container>
);

export default injectIntl(UnRegisteredBoatForm);
