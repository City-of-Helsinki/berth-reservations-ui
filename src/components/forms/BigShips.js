// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Joi from 'joi';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import validation from '../../utils/formValidation';

import Form from './fields/Form';
import { Text, Select, Radio, Checkbox } from './fields/InputField';

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

const BigShipsForm = ({ intl, onSubmit, initialValues, getHandleSubmit }: Props) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validation(schema)}
      getHandleSubmit={getHandleSubmit}
    >
      {() => (
        <Container fluid>
          <FormattedMessage tagName="h3" id="form.big_ship.header.title" />
          <FormattedMessage tagName="p" id="form.big_ship.summary" />

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
                text="form.big_ship.usage.text"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <FormattedMessage tagName="p" id="form.big_ship.time_period.label" />

              <Radio
                id="time_period.for_now"
                name="time_period"
                label="form.big_ship.time_period.for_now"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Radio
                id="time_period.fixed"
                name="time_period"
                label="form.big_ship.time_period.fixed"
              />
            </Col>
            <Col sm={6}>
              <Row>
                <Col sm={5}>
                  <Text
                    id="time_period.from"
                    name="time_period.from"
                    placeholder="form.big_ship.time_period.from.placeholder"
                  />
                </Col>
                <Col sm={1}>
                  <center>-</center>
                </Col>
                <Col sm={5}>
                  <Text
                    id="time_period.to"
                    name="time_period.to"
                    placeholder="form.big_ship.time_period.to.placeholder"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormattedMessage tagName="h3" id="form.big_ship.header.inspection_and_insurence" />
              <Checkbox id="inspected" name="inspected" label="form.big_ship.inspected.label" />
              <Checkbox id="insurence" name="insurence" label="form.big_ship.insurence.label" />
              <Checkbox id="agreed" name="agreed" label="form.big_ship.agreed.label" />
              <FormattedMessage tagName="p" id="form.big_ship.stuff" />
            </Col>
          </Row>
        </Container>
      )}
    </Form>
  );
};

export default injectIntl(BigShipsForm);
