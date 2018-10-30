// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const PostalDetailsFragment = ({ prefix }: FormFragmentProps) => (
  <Row>
    <Col sm={4}>
      <Text
        name={`${prefix}.street_address`}
        label={`form.postal_details.field.street_address.label`}
      />
    </Col>
    <Col sm={4}>
      <Text name={`${prefix}.postal_code`} label={`form.postal_details.field.postal_code.label`} />
    </Col>
    <Col sm={4}>
      <Text
        name={`${prefix}.munacipality`}
        label={`form.postal_details.field.munacipality.label`}
      />
    </Col>
  </Row>
);
export default PostalDetailsFragment;
