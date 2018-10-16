// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Text, Select, Checkbox } from './fields/InputField';
import InputGroup from './fields/InputGroup';

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
  boatName: Joi.string().required(),
  boatType: Joi.string().required(),
  registerNumber: Joi.string().required()
});

const BoatInformationForm = ({ intl, onSubmit, initialValues }: Props) => (
  <Form
    onSubmit={formData => onSubmit(formData)}
    initialValues={initialValues}
    validate={validation(schema)}
  >
    {({ reset, submitting, pristine }) => (
      <Fragment>
        <h3>
          <FormattedMessage id="page.boat.form.section.boat_info" />
        </h3>
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
        <h3>
          <FormattedMessage id="page.boat.form.section.boat_measures" />
        </h3>
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
        <h3>
          <FormattedMessage id="page.boat.form.section.boat_additional_info" />
        </h3>
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
        <h3>
          <FormattedMessage id="page.boat.form.section.boat_accessibility" />
        </h3>
        <Checkbox
          id="accessibility"
          name="accessibility"
          label="page.boat.form.accessibility"
          inline={false}
        />
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
      </Fragment>
    )}
  </Form>
);

export default injectIntl(BoatInformationForm);
