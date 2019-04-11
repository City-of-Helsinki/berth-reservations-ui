import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap';
import CompanyDetails from '../fragments/CompanyDetails';
import ContactDetails from '../fragments/ContactDetails';
import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import './Tabs.scss';

interface Props {
  prefix: string;
}

export default ({ prefix }: Props) => (
  <Container className="app-Form__styled-container">
    <FormattedMessage tagName="h3" id="form.company.header.title" />
    <CompanyDetails />
    <PostalDetails />
    <FormattedMessage tagName="h3" id="form.company.header.contact_person" />
    <FullName />
    <ContactDetails />
  </Container>
);
