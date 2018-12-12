// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const PostalDetailsFragment = ({ prefix, noValidate = false }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        name={`${prefix}.street_address`}
        label={`form.postal_details.field.street_address.label`}
        placeholder={`form.postal_details.field.street_address.placeholder`}
      />
    </Col>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        name={`${prefix}.postal_code`}
        label={`form.postal_details.field.postal_code.label`}
        placeholder={`form.postal_details.field.postal_code.placeholder`}
      />
    </Col>
    <Col sm={4}>
      <Text
        noValidate={noValidate}
        name={`${prefix}.munacipality`}
        label={`form.postal_details.field.munacipality.label`}
        placeholder={`form.postal_details.field.munacipality.placeholder`}
      />
    </Col>
  </Row>
);
export default PostalDetailsFragment;
