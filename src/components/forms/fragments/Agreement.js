// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';

import { Checkbox } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

const ContactByFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={6}>
      <Checkbox
        noValidate={noValidate}
        name={`${prefix}.guarantee`}
        label="form.overview.field.guarantee.label"
        required
      />
    </Col>
  </Row>
);

export default ContactByFragment;
