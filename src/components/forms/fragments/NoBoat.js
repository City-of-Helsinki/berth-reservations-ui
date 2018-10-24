// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';

import { Select, Checkbox, Number } from '../Fields';

type Props = {
  intl: intlShape
};

export const schema = Joi.object().keys({
  boatLength: Joi.number().required(),
  boatWidth: Joi.number().required(),
  boatType: Joi.string().required()
});

const NoBoatForm = ({ intl }: Props) => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_info" />
    <Row>
      <Col sm={4}>
        <Select id="boatType" name="boatType" label="page.boat.form.type.label" required>
          <option>{intl.messages['page.boat.form.type.placeholder']}</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </Select>
      </Col>
      <Col sm={4}>
        <Number
          id="boatWidth"
          name="boatWidth"
          label="page.boat.form.width.label"
          append="m"
          required
        />
      </Col>
      <Col sm={4}>
        <Number
          id="boatLength"
          name="boatLength"
          label="page.boat.form.length.label"
          append="m"
          required
        />
      </Col>
    </Row>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_accessibility" />
    <Checkbox
      id="accessibility"
      name="accessibility"
      label="page.boat.form.accessibility"
      inline={false}
    />
  </Container>
);

export default injectIntl(NoBoatForm);
