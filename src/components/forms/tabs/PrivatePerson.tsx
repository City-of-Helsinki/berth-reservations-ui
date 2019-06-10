import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container } from 'reactstrap';
import ContactDetails from '../fragments/ContactDetails';
import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import './Tabs.scss';

export default () => (
  <Container className="vene-form__styled-container">
    <FormattedMessage tagName="h3" id="form.private_person.header.title" />
    <FullName />
    <PostalDetails />
    <ContactDetails />
  </Container>
);
