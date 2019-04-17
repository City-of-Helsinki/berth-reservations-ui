// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { Text } from '../Fields';

const Container = styled.div`
  margin-bottom: 3em;
`;

const ApplicationCode = () => (
  <Container>
    <FormattedMessage tagName="h5" id="form.overview.field.application_code.title" />
    <Row>
      <Col sm={6}>
        <Text
          name={`application_code`}
          placeholder={`form.overview.field.application_code.placeholder`}
        />
      </Col>
    </Row>
    <FormattedMessage id={`form.overview.field.application_code.description`} />
  </Container>
);

export default ApplicationCode;
