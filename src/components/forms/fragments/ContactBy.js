// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { Checkbox } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

const ContactByFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Fragment>
    <Row>
      <Col sm={3}>
        <Checkbox
          noValidate={noValidate}
          name={`${prefix}.email`}
          label="form.overview.field.email.label"
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          noValidate={noValidate}
          name={`${prefix}.sms`}
          label="form.overview.field.sms.label"
        />
      </Col>
    </Row>
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
  </Fragment>
);

export default ContactByFragment;
