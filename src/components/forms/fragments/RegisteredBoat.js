// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';

import { Text, Select, Number } from '../Fields';

import RegistrationAdditionalInfo, {
  schema as registrationAdditionalInfoSchema
} from '../groups/RegistrationAdditionalInfo';

type Props = {
  intl: intlShape
};

export const schema = Joi.object().keys({
  registeredBoat: Joi.object()
    .keys({
      registerNumber: Joi.string().required(),
      type: Joi.string().required(),
      width: Joi.number().required(),
      length: Joi.number().required(),
      depth: Joi.number().required(),
      weight: Joi.number().required(),
      additionalInfo: registrationAdditionalInfoSchema.required()
    })
    .required()
});

const RegisteredBoatForm = ({ intl }: Props) => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_info" />
    <Row>
      <Col sm={6}>
        <Text
          id="registerNumber"
          name="registeredBoat.registerNumber"
          label="page.boat.form.registernumber.label"
          placeholder="page.boat.form.registernumber.placeholder"
          required
        />
      </Col>
      <Col sm={6}>
        <Select id="boatType" name="registeredBoat.type" label="page.boat.form.type.label" required>
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
          name="registeredBoat.width"
          label="page.boat.form.width.label"
          append="m"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          id="boatLength"
          name="registeredBoat.length"
          label="page.boat.form.length.label"
          append="m"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          id="boatDepth"
          name="registeredBoat.depth"
          label="page.boat.form.depth.label"
          append="m"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          id="boatWeight"
          name="registeredBoat.weight"
          label="page.boat.form.weight.label"
          append="kg"
          required
        />
      </Col>
    </Row>
    <RegistrationAdditionalInfo prefix="registeredBoat.additionalInfo" />
  </Container>
);

export default injectIntl(RegisteredBoatForm);
