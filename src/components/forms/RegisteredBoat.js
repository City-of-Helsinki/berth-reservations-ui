// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Text, Select } from './fields/InputField';
import InputGroup from './fields/InputGroup';

import RegistrationAdditionalInfo, {
  registrationAdditionalInfo
} from './partials/RegistrationAdditionalInfo';

type Props = {
  intl: intlShape,
  onSubmit: Function,
  initialValues: Object
};

const schema = Joi.object().keys({
  boatDepth: Joi.number().required(),
  boatLength: Joi.number().required(),
  boatWeight: Joi.number().required(),
  boatWidth: Joi.number().required(),
  boatModel: Joi.string().required(),
  ...registrationAdditionalInfo
});

const BoatInformationForm = ({ intl, onSubmit, initialValues }: Props) => (
  <Form
    onSubmit={formData => onSubmit(formData)}
    initialValues={initialValues}
    validate={validation(schema)}
  >
    {({ reset, submitting, pristine }) => (
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
            <InputGroup
              id="boatWidth"
              name="boatWidth"
              label="page.boat.form.width.label"
              append="m"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatLength"
              name="boatLength"
              label="page.boat.form.length.label"
              append="m"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatDepth"
              name="boatDepth"
              label="page.boat.form.depth.label"
              append="m"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatWeight"
              name="boatWeight"
              label="page.boat.form.weight.label"
              append="kg"
              required
            />
          </Col>
        </Row>
        <RegistrationAdditionalInfo />

        <hr />

        <button
          type="button"
          className="btn btn-secondary"
          onClick={reset}
          disabled={submitting || pristine}
        >
          <FormattedMessage id="page.boat.form.action.reset_form" />
        </button>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          <FormattedMessage id="page.boat.form.action.next_page" />
        </button>
      </Container>
    )}
  </Form>
);

export default injectIntl(BoatInformationForm);
