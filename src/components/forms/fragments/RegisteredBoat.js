// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';

import { Text, Select, Number } from '../Fields';

import RegistrationAdditionalInfo, {
  registrationAdditionalInfoSchema
} from './RegistrationAdditionalInfo';

type Props = {
  intl: intlShape
};

export const schema = Joi.object().keys({
  registerNumber: Joi.string().required(),
  boatType: Joi.string().required(),
  boatWidth: Joi.number().required(),
  boatLength: Joi.number().required(),
  boatDepth: Joi.number().required(),
  boatWeight: Joi.number().required(),
  ...registrationAdditionalInfoSchema
});

const RegisteredBoatForm = ({ intl }: Props) => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_info" />
    <Row>
      <Col sm={6}>
        <Text
          id="registerNumber"
          name="registerNumber"
          label="page.boat.form.registernumber.label"
          placeholder="page.boat.form.registernumber.placeholder"
          required
        />
      </Col>
      <Col sm={6}>
        <Select id="boatType" name="boatType" label="page.boat.form.type.label" required>
          <option>{intl.messages['page.boat.form.type.placeholder']}</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </Select>
      </Col>
    </Row>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_measures" />
    <Row>
      <Col sm={3}>
        <Number
          id="boatWidth"
          name="boatWidth"
          label="page.boat.form.width.label"
          append="m"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          id="boatLength"
          name="boatLength"
          label="page.boat.form.length.label"
          append="m"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          id="boatDepth"
          name="boatDepth"
          label="page.boat.form.depth.label"
          append="m"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          id="boatWeight"
          name="boatWeight"
          label="page.boat.form.weight.label"
          append="kg"
          required
        />
      </Col>
    </Row>
    <RegistrationAdditionalInfo />
  </Container>
);

export default injectIntl(RegisteredBoatForm);
