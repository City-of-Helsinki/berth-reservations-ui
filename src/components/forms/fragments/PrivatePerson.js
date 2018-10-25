// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { FormattedMessage } from 'react-intl';

import { Text } from '../Fields';

import FullName, { schema as fullNameSchema } from './FullName';
import PostalDetails, { schema as postalDetailsSchema } from './PostalDetails';
import ContactDetails, { schema as contactDetailsSchema } from './ContactDetails';

export const schema = Joi.object()
  .keys({
    ssn: Joi.string().required()
  })
  .concat(fullNameSchema)
  .concat(postalDetailsSchema)
  .concat(contactDetailsSchema);

type Props = {
  prefix: string
};

const PrivatePersonForm = ({ prefix }: Props) => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="form.person.person_info" />
    <FullName prefix={prefix} />
    <Row>
      <Col sm={3}>
        <Text
          id="form.person.ssn"
          name={`${prefix}.ssn`}
          label="form.person.field.ssn.label"
          placeholder="form.person.field.ssn.placeholder"
        />
      </Col>
    </Row>
    <PostalDetails prefix={prefix} />
    <ContactDetails prefix={prefix} />
  </Container>
);

export default PrivatePersonForm;
