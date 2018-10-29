// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

import { Select, Checkbox, Number } from '../Fields';
import type { FormFragmentPropsWithIntl } from '../../../types/form';
import { mustBeNumber } from '../../../utils/formValidation';

const NoBoatForm = ({ prefix, intl }: FormFragmentPropsWithIntl) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="form.no_boat.header.title" />
    <Row>
      <Col sm={4}>
        <Select name={`${prefix}.boat_type`} label="form.no_boat.field.type.label" required>
          <option>{intl.messages['form.no_boat.field.type.placeholder']}</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </Select>
      </Col>
      <Col sm={4}>
        <Number
          validate={mustBeNumber}
          name={`${prefix}.boat_width`}
          label="form.no_boat.field.width.label"
          append="m"
          required
        />
      </Col>
      <Col sm={4}>
        <Number
          validate={mustBeNumber}
          name={`${prefix}.boat_length`}
          label="form.no_boat.field.length.label"
          append="m"
          required
        />
      </Col>
    </Row>
    <FormattedMessage tagName="h3" id="form.no_boat.header.accessibility" />
    <Checkbox
      name={`${prefix}.accessibility`}
      label="form.no_boat.field.accessibility.label"
      inline={false}
    />
  </Fragment>
);

export default injectIntl(NoBoatForm);
