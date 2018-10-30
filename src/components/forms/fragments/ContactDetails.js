// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { Text } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

const ContactDetailsFragment = ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text
        name={`${prefix}.mobile_phone`}
        label="form.contact_details.field.mobile_phone.label"
        required
      />
    </Col>
    <Col sm={4}>
      <Text name={`${prefix}.email`} label={`form.contact_details.field.email.label`} required />
    </Col>
  </Row>
);

export default ContactDetailsFragment;
