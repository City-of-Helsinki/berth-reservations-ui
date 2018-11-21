// @flow
import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

type Props = {
  person: Object
};

const StyledContactSection = styled.div`
  margin-bottom: 1em;
`;

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
        {person.postal && person.postal.street_address && (
          <StyledContactSection>{person.postal.street_address}</StyledContactSection>
        )}
        {person.postal && person.postal.postal_code && (
          <StyledContactSection>{person.postal.postal_code}</StyledContactSection>
        )}
        {person.postal && person.postal.munacipality && person.postal.munacipality}
      </Col>
    </Row>
  </Fragment>
);

export default Person;
