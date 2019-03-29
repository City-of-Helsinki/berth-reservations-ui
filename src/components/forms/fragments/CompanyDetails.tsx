import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { Text } from '../Fields';

const CompanyDetailsFragment = () => (
  <Fragment>
    <Row>
      <Col sm={5}>
        <Text
          name={`company_name`}
          label="form.company_details.field.name.label"
          placeholder="form.company_details.field.name.placeholder"
          required
        />
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <Text
          name={`business_id`}
          label="form.company_details.field.business_id.label"
          placeholder="form.company_details.field.business_id.placeholder"
          required
        />
      </Col>
    </Row>
  </Fragment>
);

export default CompanyDetailsFragment;
