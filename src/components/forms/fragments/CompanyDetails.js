// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';
import type { FormFragmentProps } from '../../../types/form';

const CompanyDetailsFragment = ({ prefix }: FormFragmentProps) => (
  <Fragment>
    <Row>
      <Col sm={5}>
        <Text
          name={`${prefix}.name`}
          label="form.company_details.field.name.label"
          placeholder="form.company_details.field.name.placeholder"
        />
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <Text
          name={`${prefix}.businessId`}
          label="form.company_details.field.business_id.label"
          placeholder="form.company_details.field.business_id.placeholder"
        />
      </Col>
    </Row>
  </Fragment>
);

export default CompanyDetailsFragment;
