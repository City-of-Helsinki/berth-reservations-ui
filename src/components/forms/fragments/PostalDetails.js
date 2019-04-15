// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';

const PostalDetailsFragment = () => (
  <Row>
    <Col sm={4}>
      <Text
        name={`address`}
        label={`form.postal_details.field.street_address.label`}
        placeholder={`form.postal_details.field.street_address.placeholder`}
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        name={`zip_code`}
        label={`form.postal_details.field.postal_code.label`}
        placeholder={`form.postal_details.field.postal_code.placeholder`}
        required
      />
    </Col>
    <Col sm={4}>
      <Text
        name={`municipality`}
        label={`form.postal_details.field.munacipality.label`}
        placeholder={`form.postal_details.field.munacipality.placeholder`}
        required
      />
    </Col>
  </Row>
);
export default PostalDetailsFragment;
