// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { FormattedMessage } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Checkbox } from './fields/InputField';

type Props = {
  onSubmit: Function,
  initialValues: Object
};

const schema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  ssn: Joi.string().required(),
  streetAddress: Joi.string(),
  postalCode: Joi.number(),
  munacipality: Joi.string(),
  mobilePhone: Joi.string().required(),
  email: Joi.string().required()
});

const OverviewForm = ({ onSubmit, initialValues }: Props) => (
  <Form
    onSubmit={formData => onSubmit(formData)}
    initialValues={initialValues}
    validate={validation(schema)}
  >
    {({ reset, submitting, pristine }) => (
      <Container fluid>
        <FormattedMessage tagName="h3" id="page.overview.form.section.info_options" />
        <Row>
          <Col sm={3}>
            <Checkbox
              id="email"
              name="email"
              label="page.overview.form.section.info_options.email"
              inline={false}
            />
          </Col>
          <Col sm={3}>
            <Checkbox
              id="sms"
              name="sms"
              label="page.overview.form.section.info_options.sms"
              inline={false}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Checkbox
              id="guarantee"
              name="guarantee"
              label="page.overview.form.section.info_options.guarantee"
              inline={false}
            />
          </Col>
        </Row>

        <FormattedMessage
          tagName="h5"
          id="page.overview.form.section.info_options.receivable_items"
        />
        <Row>
          <Col sm={6}>
            <Checkbox
              id="receivable_boating_info"
              name="receivable_boating_info"
              label="page.overview.form.section.info_options.receivable_items.boating_info"
              inline={false}
            />
          </Col>
        </Row>

        <FormattedMessage
          tagName="h6"
          id="page.overview.form.section.info_options.receivable_items.also"
        />

        <Row>
          <Col sm={3}>
            <Checkbox
              id="receivable_fitness_services"
              name="receivable_fitness_services"
              label="page.overview.form.section.info_options.receivable_items.fitness_services"
              inline={false}
            />
          </Col>
          <Col sm={3}>
            <Checkbox
              id="receivable_library_services"
              name="receivable_library_services"
              label="page.overview.form.section.info_options.receivable_items.library_services"
              inline={false}
            />
          </Col>
          <Col sm={3}>
            <Checkbox
              id="receivable_other_cultural_services"
              name="receivable_other_cultural_services"
              label="page.overview.form.section.info_options.receivable_items.other_cultural_services"
              inline={false}
            />
          </Col>
        </Row>

        <hr />

        <button
          type="button"
          className="btn btn-secondary"
          onClick={reset}
          disabled={submitting || pristine}
        >
          <FormattedMessage id="page.overview.form.action.reset_form" />
        </button>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          <FormattedMessage id="page.overview.form.action.next_page" />
        </button>
      </Container>
    )}
  </Form>
);

export default OverviewForm;
