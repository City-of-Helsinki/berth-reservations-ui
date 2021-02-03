import React from 'react';
import { Col, Row } from 'reactstrap';

import './personOverview.scss';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  municipality: string;
}

const PersonOverview = ({ firstName, lastName, email, phoneNumber, address, zipCode, municipality }: Props) => (
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

export default PersonOverview;
