import React from 'react';
import { Col, Row } from 'reactstrap';

import { mustBeNames } from '../../../utils/formValidation';
import { Text } from '../../../fields/Fields';

const FullName = () => (
  <Row>
    <Col sm={4}>
      <Text
        name={`firstName`}
        label="form.private_person.field.first_name.label"
        placeholder="form.private_person.field.first_name.placeholder"
        required
        validate={mustBeNames(5)}
      />
    </Col>
    <Col sm={4}>
      <Text
        name={`lastName`}
        label="form.private_person.field.last_name.label"
        placeholder="form.private_person.field.last_name.placeholder"
        required
        validate={mustBeNames(5)}
      />
    </Col>
  </Row>
);

export default FullName;
