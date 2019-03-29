import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

type Props = {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  address: String;
  zipCode: String;
  municipality: String;
};

const StyledContactSection = styled.div`
  margin-bottom: 1em;
`;

const Person = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  zipCode,
  municipality
}: Props) => (
  <Fragment>
    <Row>
      <Col md={12}>
        {firstName} {lastName}
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        {email}
        <br />
        {phoneNumber}
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        {zipCode && address && <StyledContactSection>{address}</StyledContactSection>}
        {zipCode && <StyledContactSection>{zipCode}</StyledContactSection>}
        {municipality && municipality}
      </Col>
    </Row>
  </Fragment>
);

export default Person;
