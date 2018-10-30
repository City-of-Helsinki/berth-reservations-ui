// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl } from 'react-intl';
import { Text, Select } from '../Fields';

import type { FormFragmentPropsWithIntl } from '../../../types/form';

const RegisteredBoatDetailsFragment = ({ prefix, intl }: FormFragmentPropsWithIntl) => (
  <Row>
    <Col sm={6}>
      <Text
        name={`${prefix}.register_number`}
        label="form.registered.field.register_number.label"
        placeholder="form.registered.field.register_number.placeholder"
        required
      />
    </Col>
    <Col sm={6}>
      <Select name={`${prefix}.type`} label="form.registered.field.type.label" required>
        <option>{intl.messages['page.boat.form.field.type.placeholder']}</option>
        <option value="bigboat">a</option>
        <option>b</option>
        <option>c</option>
      </Select>
    </Col>
  </Row>
);

export default injectIntl(RegisteredBoatDetailsFragment);
