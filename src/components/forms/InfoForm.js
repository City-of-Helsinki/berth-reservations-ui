import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Joi from 'joi';

import Form from './fields/Form';

import { Text, Select, Checkbox } from './fields/InputField';
import InputGroup from './fields/InputGroup';

const schema = Joi.object().keys({
  boatDepth: Joi.string().required(),
  boatLength: Joi.string().required(),
  boatModel: Joi.string().required(),
  boatName: Joi.string().required(),
  boatType: Joi.string().required(),
  boatWeight: Joi.string().required(),
  boatWidth: Joi.string().required(),
  registerNumber: Joi.string().required()
});

const validate = values => {
  const { error } = Joi.validate(values, schema, { abortEarly: false });
  if (error.details) {
    return error.details.reduce(
      (reduction, current) => ({
        ...reduction,
        [current.context.key]: current.message
      }),
      {}
    );
  }
  return {};
};

export default ({ onSubmit }) => (
  <Form onSubmit={onSubmit} validate={validate}>
    {({ reset, submitting, pristine }) => (
      <Fragment>
        <h1>Rekisteröidyn veneen tiedot</h1>
        <Row>
          <Col sm={6}>
            <Text
              id="registerNumber"
              name="registerNumber"
              label="form.info.registernumber.label"
              placeholder="form.info.registernumber.placeholder"
              required
            />
          </Col>
          <Col sm={6}>
            <Select id="boatType" name="boatType" label="form.info.boat.type.label" required>
              <option>form.info.boat.type.placeholder</option>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </Select>
          </Col>
        </Row>
        <h1>Veneen mitat</h1>
        <Row>
          <Col sm={3}>
            <InputGroup
              id="boatWidth"
              name="boatWidth"
              label="form.info.boat.width.label"
              append="m"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatLength"
              name="boatLength"
              label="form.info.boat.length.label"
              append="m"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatDepth"
              name="boatDepth"
              label="form.info.boat.depth.label"
              append="m"
              required
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatWeight"
              name="boatWeight"
              label="form.info.boat.weight.label"
              append="kg"
              required
            />
          </Col>
        </Row>
        <h1>Lisätiedot</h1>
        <Row>
          <Col sm={4}>
            <Text
              id="boatName"
              name="boatName"
              label="form.info.boat.name.label"
              placeholder="form.info.boat.name.placeholder"
              required
            />
          </Col>
          <Col sm={4}>
            <Text
              id="boatModel"
              name="boatModel"
              label="form.info.boat.model.label"
              placeholder="form.info.boat.model.placeholder"
              required
            />
          </Col>
        </Row>
        <h3>Esteettömyys</h3>
        <Checkbox id="accessibility" name="accessibility" label="form.info.accessibility" />
        <hr />

        <button
          type="button"
          className="btn btn-secondary"
          onClick={reset}
          disabled={submitting || pristine}
        >
          Reset
        </button>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          Submit
        </button>
      </Fragment>
    )}
  </Form>
);
