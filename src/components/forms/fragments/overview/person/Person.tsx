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
        {zipCode && address && <div className="vene-person__contact-section">{address}</div>}
        {zipCode && <div className="vene-person__contact-section">{zipCode}</div>}
        {municipality && municipality}
      </Col>
    </Row>
  </>
);

export default Person;
