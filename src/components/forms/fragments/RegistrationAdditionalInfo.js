// @flow
import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Text, Checkbox } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const RegistrationAdditionalInfo = ({ prefix }: FormFragmentProps) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_additional_info" />
    <Row>
      <Col sm={4}>
        <Text
          name={`${prefix}.boat_name`}
          label="page.boat.form.name.label"
          placeholder="page.boat.form.name.placeholder"
          required
        />
      </Col>
      <Col sm={4}>
        <Text
          name={`${prefix}.boat_model`}
          label="page.boat.form.model.label"
          placeholder="page.boat.form.model.placeholder"
          required
        />
      </Col>
    </Row>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_accessibility" />
    <Checkbox
      name={`${prefix}.accessibility`}
      label="page.boat.form.accessibility"
      inline={false}
    />
  </Fragment>
);

export default RegistrationAdditionalInfo;
