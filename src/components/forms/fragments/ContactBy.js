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
          placeholder="form.overview.field.email.placeholder"
        />
      </Col>
      <Col sm={3}>
        <Checkbox
          noValidate={noValidate}
          name={`${prefix}.sms`}
          label="form.overview.field.sms.label"
          placeholder="form.overview.field.sms.placeholder"
        />
      </Col>
    </Row>
  </Fragment>
);

export default ContactByFragment;
