// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { Checkbox } from '../Fields';

import type { FormFragmentProps } from '../../../types/form';

const ContactByFragment = ({ prefix }: FormFragmentProps) => (
  <Fragment>
    <Row>
      <Col sm={3}>
        <Checkbox name={`${prefix}.email`} label="form.overview.field.email.label" inline={false} />
      </Col>
      <Col sm={3}>
        <Checkbox name={`${prefix}.sms`} label="form.overview.field.sms.label" inline={false} />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Checkbox
          name={`${prefix}.guarantee`}
          label="form.overview.field.guarantee.label"
          inline={false}
        />
      </Col>
    </Row>
  </Fragment>
);

export default ContactByFragment;
