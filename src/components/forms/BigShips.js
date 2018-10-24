// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Text, Select, MultiCheckbox, MultiRadio } from './fields/InputField';

type Props = {
  intl: intlShape,
  onSubmit: Function,
  initialValues: Object
};

const schema = Joi.object().keys({
  propulsion: Joi.any()
    .required()
    .valid('a', 'b', 'c'),
  hull_material: Joi.any()
    .required()
    .valid('a', 'b', 'c'),
  usage: Joi.string(),
  time_period: Joi.string()
    .required()
    .valid('for_now', 'fixed'),
  time_period_from: Joi.when('time_period', {
    is: 'fixed',
    then: Joi.date()
      .min(Joi.ref('time_period_from'))
      .required()
  }),
  time_period_to: Joi.when('time_period', {
    is: 'fixed',
    then: Joi.date()
      .max(Joi.ref('time_period_to'))
      .required()
  }),
  insurance: Joi.string().required(),
  inspected: Joi.string().required(),
  agreed: Joi.string().required()
});

const BigShipsForm = ({ intl, onSubmit, initialValues }: Props) => (
  <Form onSubmit={onSubmit} initialValues={initialValues} validate={validation(schema)}>
    {() => (
      <Container fluid>
        <FormattedMessage tagName="h3" id="form.big_ship.header.title" />
        <FormattedMessage tagName="p" id="form.big_ship.summary" />
        <FormattedMessage tagName="h3" id="form.big_ship.header.details" />

        <Row>
          <Col sm={6}>
            <Select
              id="propulsion"
              name="propulsion"
              label="form.big_ship.propulsion.label"
              required
            >
              <option>{intl.messages['form.big_ship.propulsion.placeholder']}</option>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </Select>
          </Col>
          <Col sm={6}>
            <Select
              id="hull_material"
              name="hull_material"
              label="form.big_ship.hull_material.label"
              required
            >
              <option>{intl.messages['form.big_ship.hull_material.placeholder']}</option>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </Select>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Text
              id="usage"
              name="usage"
              label="form.big_ship.usage.label"
              placeholder="form.big_ship.usage.placeholder"
              required
            />
            <FormattedMessage tagName="p" id="form.big_ship.usage.info" />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <MultiRadio
              id="time_period_for_now"
              items={[
                {
                  name: 'time_period',
                  label: 'form.big_ship.time_period.for_now',
                  value: 'for_now'
                },
                { name: 'time_period', label: 'form.big_ship.time_period.fixed', value: 'fixed' }
              ]}
              label="form.big_ship.time_period.label"
            />
          </Col>
          <Col sm={6}>
            <Row>
              <Col sm={5}>
                <Text
                  id="time_period.from"
                  name="time_period_from"
                  placeholder="form.big_ship.time_period.from.placeholder"
                />
              </Col>
              <Col sm={1}>
                <center>-</center>
              </Col>
              <Col sm={5}>
                <Text
                  id="time_period.to"
                  name="time_period_to"
                  placeholder="form.big_ship.time_period.to.placeholder"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <MultiCheckbox
              id="multiCheckbox"
              name="MultiCheckbox"
              items={[
                { name: 'inspected', label: 'form.big_ship.inspected.label', value: 'inspected' },
                { name: 'insurance', label: 'form.big_ship.insurance.label', value: 'insurance' },
                { name: 'agreed', label: 'form.big_ship.agreed.label', value: 'agreed' }
              ]}
              label="form.big_ship.header.inspection_and_insurance"
            />
            <FormattedMessage tagName="p" id="form.big_ship.inspection_and_insurance" />
          </Col>
        </Row>

        <button type="submit" className="btn btn-primary">
          <FormattedMessage id="page.boat.form.action.next_page" />
        </button>
      </Container>
    )}
  </Form>
);

export default injectIntl(BigShipsForm);
