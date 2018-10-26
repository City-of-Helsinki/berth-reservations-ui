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
          label="form.registered.name.label"
          placeholder="form.registered.name.placeholder"
          required
        />
      </Col>
      <Col sm={4}>
        <Text
          name={`${prefix}.boat_model`}
          label="form.registered.model.label"
          placeholder="form.registered.model.placeholder"
          required
        />
      </Col>
    </Row>
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Checkbox
      name={`${prefix}.accessibility`}
      label="form.registered.accessibility.label"
      inline={false}
    />
  </Fragment>
);

export default RegistrationAdditionalInfo;
