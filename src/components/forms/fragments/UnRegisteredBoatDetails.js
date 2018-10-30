// @flow

import React from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl } from 'react-intl';

import { Select, Number } from '../Fields';
import type { FormFragmentPropsWithIntl } from '../../../types/form';
import { mustBeNumber } from '../../../utils/formValidation';

const UnRegisteredBoatDetailsFragment = ({ prefix, intl }: FormFragmentPropsWithIntl) => (
  <Row>
    <Col sm={4}>
      <Select name={`${prefix}.type`} label="form.no_boat.field.type.label" required>
        <option>{intl.messages['form.no_boat.field.type.placeholder']}</option>
        <option>a</option>
        <option>b</option>
        <option>c</option>
      </Select>
    </Col>
    <Col sm={4}>
      <Number
        validate={mustBeNumber}
        name={`${prefix}.width`}
        label="form.no_boat.field.width.label"
        append="m"
        required
      />
    </Col>
    <Col sm={4}>
      <Number
        validate={mustBeNumber}
        name={`${prefix}.length`}
        label="form.no_boat.field.length.label"
        append="m"
        required
      />
    </Col>
  </Row>
);

export default injectIntl(UnRegisteredBoatDetailsFragment);
