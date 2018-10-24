import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Joi from 'joi';

import { Text, Checkbox } from '../fields/InputField';

export const registrationAdditionalInfo = {
  boatName: Joi.string().required(),
  boatModel: Joi.string().required(),
  accessibility: Joi.boolean().required()
};

export default () => (
  <Fragment>
    <FormattedMessage tagName="h3" id="page.boat.form.section.boat_additional_info" />
    <Row>
      <Col sm={4}>
        <Text
          id="boatName"
          name="boatName"
          label="page.boat.form.name.label"
          placeholder="page.boat.form.name.placeholder"
          required
        />
      </Col>
      <Col sm={4}>
        <Text
          id="boatModel"
          name="boatModel"
          label="page.boat.form.model.label"
          placeholder="page.boat.form.model.placeholder"
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
  </Fragment>
);
