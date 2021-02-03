import React from 'react';
import { Col, Row } from 'reactstrap';

import { mustBeNames } from '../../../common/utils/formValidation';
import { Text } from '../../../common/fields/Fields';

const FullNameFragment = () => (
  <Row>
    <Col sm={4}>
      <Text
        name={`firstName`}
        label="form.private_person.field.first_name.label"
        placeholder="form.private_person.field.first_name.placeholder"
        required
        validate={mustBeNames(4)}
      />
    </Col>
    <Col sm={4}>
      <Text
        name={`lastName`}
        label="form.private_person.field.last_name.label"
        placeholder="form.private_person.field.last_name.placeholder"
        required
        validate={mustBeNames(1)}
      />
    </Col>
  </Row>
);

export default FullNameFragment;
