import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  municipality: string;
}

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
