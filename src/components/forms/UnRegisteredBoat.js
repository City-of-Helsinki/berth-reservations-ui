// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Text, Checkbox } from './fields/InputField';
import InputGroup from './fields/InputGroup';

type Props = {
  onSubmit: Function,
  initialValues: Object
};

const schema = Joi.object().keys({
  type: Joi.string().required(),
  width: Joi.number().required(),
  length: Joi.number().required(),
  name: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required()
});

const UnRegisteredBoatForm = ({ onSubmit, initialValues }: Props) => (
  <Form
    onSubmit={formData => onSubmit(formData)}
    initialValues={initialValues}
    validate={validation(schema)}
  >
    {({ reset, submitting, pristine }) => (
      <Fragment>
        <h3>
          <FormattedMessage id="form.unregistered.header.title" />
        </h3>
        <Row>
          <Col sm={6}>
            <Text
              id="type"
              name="type"
              label="form.unregistered.type.label"
              placeholder="form.unregistered.type.placeholder"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="width"
              name="width"
              label="form.unregistered.width.label"
              append="m"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="length"
              name="length"
              label="form.unregistered.lenght.label"
              append="m"
              required
            />
          </Col>
        </Row>
        <h3>
          <FormattedMessage id="form.unregistered.header.additional_info" />
        </h3>
        <Row>
          <Col sm={4}>
            <Text
              id="brand"
              name="brand"
              label="form.unregistered.brand.label"
              placeholder="form.unregistered.brand.placeholder"
              required
            />
          </Col>
          <Col sm={4}>
            <Text
              id="model"
              name="model"
              label="form.unregistered.model.label"
              placeholder="form.unregistered.model.placeholder"
              required
            />
          </Col>
        </Row>
        <h3>
          <FormattedMessage id="form.unregistered.header.accessibility" />
        </h3>
        <Checkbox
          id="accessibility"
          name="accessibility"
          label="form.unregistered.accessibility.label"
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

export default injectIntl(UnRegisteredBoatForm);
