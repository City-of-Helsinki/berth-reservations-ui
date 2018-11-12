// @flow
import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import ContactDetails from '../fragments/ContactDetails';

type Props = {
  prefix: string
};

export default ({ prefix }: Props) => (
  <Container>
    <FormattedMessage tagName="h3" id="form.private_person.header.title" />
    <FullName prefix={`${prefix}.name`} />
    <PostalDetails prefix={`${prefix}.postal`} />
    <ContactDetails prefix={`${prefix}.contact`} />
  </Container>
);
