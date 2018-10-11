import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Form as BootstrapForm, Row, Col } from 'reactstrap';

import { Text, Select, Checkbox, Radio } from './fields/InputField';
import InputGroup from './fields/InputGroup';

export default ({ onSubmit, validate }) => (
  <FinalForm
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <BootstrapForm onSubmit={handleSubmit}>
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
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatLength"
              name="boatLength"
              label="form.info.boat.length.label"
              append="m"
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatDepth"
              name="boatDepth"
              label="form.info.boat.depth.label"
              append="m"
            />
          </Col>
          <Col sm={3}>
            <InputGroup
              id="boatWeight"
              name="boatWeight"
              label="form.info.boat.weight.label"
              append="kg"
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
        <button className="btn btn-secondary">Submit</button>
      </BootstrapForm>
    )}
  />
);
