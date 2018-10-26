// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';

import { Select, Checkbox, Number } from '../Fields';

type Props = {
  prefix: string,
  intl: intlShape
};

const NoBoatForm = ({ prefix, intl }: Props) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_info" />
    <Row>
      <Col sm={4}>
        <Select name={`${prefix}.boat_type`} label="page.boat.form.type.label" required>
          <option>{intl.messages['page.boat.form.type.placeholder']}</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </Select>
      </Col>
      <Col sm={4}>
        <Number
          name={`${prefix}.boat_width`}
          label="page.boat.form.width.label"
          append="m"
          required
        />
      </Col>
      <Col sm={4}>
        <Number
          name={`${prefix}.boat_length`}
          label="page.boat.form.length.label"
          append="m"
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

export default injectIntl(NoBoatForm);
