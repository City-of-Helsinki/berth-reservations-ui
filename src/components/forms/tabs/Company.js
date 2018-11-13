// @flow
import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import ContactDetails from '../fragments/ContactDetails';
import CompanyDetails from '../fragments/CompanyDetails';

type Props = {
  prefix: string
};

export default ({ prefix }: Props) => (
  <Container>
    <FormattedMessage tagName="h3" id="form.company.header.title" />
    <CompanyDetails prefix={`${prefix}.company`} />
    <PostalDetails prefix={`${prefix}.postal`} />
    <FormattedMessage tagName="h3" id="form.company.header.contact_person" />
    <FullName prefix={`${prefix}.name`} />
    <ContactDetails prefix={`${prefix}.contact`} />
  </Container>
);
