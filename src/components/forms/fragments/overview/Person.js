// @flow
import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import './_data.scss';

type Props = {
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  address: String,
  zipCode: String,
  municipality: String
};

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
        {zipCode && address && <div className="app-form__contact-section">{address}</div>}
        {zipCode && <div className="app-form__contact-section">{zipCode}</div>}
        {municipality && municipality}
      </Col>
    </Row>
  </Fragment>
);

export default Person;
