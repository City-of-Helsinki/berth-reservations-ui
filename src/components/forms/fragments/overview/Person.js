// @flow
import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

type Props = {
  person: Object
};

const Person = ({ person }: Props) => (
  <Fragment>
    <Row>
      <Col md={12}>
        {person.name.first_name} {person.name.last_name}
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        {person.contact.email}
        <br />
        {person.contact.mobile_phone}
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        {person.postal.street_address}
        <br />
        {person.postal.postal_code}
        <br />
        {person.postal.munacipality}
      </Col>
    </Row>
  </Fragment>
);

export default Person;
