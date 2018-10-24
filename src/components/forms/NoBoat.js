// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Select, Checkbox } from './fields/InputField';
import InputGroup from './fields/InputGroup';

type Props = {
  intl: intlShape,
  onSubmit: Function,
  initialValues: Object
};

const schema = Joi.object().keys({
  boatLength: Joi.number().required(),
  boatWidth: Joi.number().required(),
  boatType: Joi.string().required()
});

const NoBoatForm = ({ intl, onSubmit, initialValues }: Props) => (
  <Form
    onSubmit={formData => onSubmit(formData)}
    initialValues={initialValues}
    validate={validation(schema)}
  >
    {({ reset, submitting, pristine }) => (
      <Fragment>
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
            <InputGroup
              id="boatWidth"
              name="boatWidth"
              label="page.boat.form.width.label"
              append="m"
              required
            />
          </Col>
          <Col sm={4}>
            <InputGroup
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

export default injectIntl(NoBoatForm);
