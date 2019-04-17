import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import { Text } from '../Fields';

import './ApplicationCode.scss';

const ApplicationCode = () => (
  <div className="vene-application-code">
    <FormattedMessage tagName="h5" id="form.overview.field.application_code.title" />
    <Row>
      <Col sm={6}>
        <Text
          name={`applicationCode`}
          placeholder={`form.overview.field.application_code.placeholder`}
        />
      </Col>
    </Row>
    <Row>
      <Col sm={10}>
        <FormattedMessage id={`form.overview.field.application_code.description`} />
      </Col>
    </Row>
  </div>
);

export default ApplicationCode;
