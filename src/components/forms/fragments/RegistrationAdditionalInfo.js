// @flow
import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Joi from 'joi';

import { Text, Checkbox } from '../Fields';

export const schema = Joi.object().keys({
  boat_name: Joi.string().required(),
  boat_model: Joi.string().required(),
  accessibility: Joi.boolean()
});

const RegistrationAdditionalInfo = ({ prefix }) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_additional_info" />
    <Row>
      <Col sm={4}>
        <Text
          id={`${prefix}.name`}
          name={`${prefix}.boat_name`}
          label="page.boat.form.name.label"
          placeholder="page.boat.form.name.placeholder"
          required
        />
      </Col>
      <Col sm={4}>
        <Text
          id={`${prefix}.model`}
          name={`${prefix}.boat_model`}
          label="page.boat.form.model.label"
          placeholder="page.boat.form.model.placeholder"
          required
        />
      </Col>
    </Row>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_accessibility" />
    <Checkbox
      id={`${prefix}.accessibility`}
      name={`${prefix}.accessibility`}
      label="page.boat.form.accessibility"
      inline={false}
    />
  </Fragment>
);

export default RegistrationAdditionalInfo;
