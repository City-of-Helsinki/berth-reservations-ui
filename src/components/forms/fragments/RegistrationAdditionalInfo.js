// @flow
import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Text, Checkbox } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const RegistrationAdditionalInfo = ({ prefix }: FormFragmentProps) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="form.registered.header.additional_info" />
    <Row>
      <Col sm={4}>
        <Text
          name={`${prefix}.boat_name`}
          label="form.registered.field.name.label"
          placeholder="form.registered.field.name.placeholder"
          required
        />
      </Col>
      <Col sm={4}>
        <Text
          name={`${prefix}.boat_model`}
          label="form.registered.field.model.label"
          placeholder="form.registered.field.model.placeholder"
          required
        />
      </Col>
    </Row>
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Checkbox
      name={`${prefix}.accessibility`}
      label="form.registered.field.accessibility.label"
      inline={false}
    />
  </Fragment>
);

export default RegistrationAdditionalInfo;
