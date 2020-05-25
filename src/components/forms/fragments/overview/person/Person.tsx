import React from 'react';
import { Col, Row } from 'reactstrap';

import './person.scss';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  municipality: string;
}

const Person = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  zipCode,
  municipality
}: Props) => (
  <>
    <Row className="vene-person__contact-section">
      <Col md={12}>
        {firstName} {lastName}
        <br />
        {email}
        <br />
        {phoneNumber}
      </Col>
    </Row>
    <Row className="vene-person__contact-section">
      <Col md={12}>
        {address}
        <br />
        {zipCode}
        <br />
        {municipality}
      </Col>
    </Row>
  </>
);

export default Person;
