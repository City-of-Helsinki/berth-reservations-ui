// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { Text } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';
import { mustBePhoneNumber, mustBeEmail } from '../../../utils/formValidation';

const ContactDetailsFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        validate={mustBePhoneNumber}
        name={`${prefix}.mobile_phone`}
        label="form.contact_details.field.mobile_phone.label"
        placeholder="form.contact_details.field.mobile_phone.placeholder"
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        validate={mustBeEmail}
        name={`${prefix}.email`}
        label={`form.contact_details.field.email.label`}
        placeholder={`form.contact_details.field.email.placeholder`}
        required
      />
    </Col>
  </Row>
);

export default ContactDetailsFragment;
