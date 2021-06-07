import { Fragment } from 'react';
import { Col, Row } from 'reactstrap';

import { mustBeBusinessId, mustBeCompanyName } from '../../../utils/formValidation';
import { Text } from '../../../fields/Fields';

const CompanyDetails = () => (
  <Fragment>
    <Row>
      <Col sm={5}>
        <Text
          name={`companyName`}
          label="form.company_details.field.name.label"
          placeholder="form.company_details.field.name.placeholder"
          required
          validate={mustBeCompanyName}
        />
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <Text
          name={`businessId`}
          label="form.company_details.field.business_id.label"
          placeholder="form.company_details.field.business_id.placeholder"
          required
          validate={mustBeBusinessId}
        />
      </Col>
    </Row>
  </Fragment>
);

export default CompanyDetails;
