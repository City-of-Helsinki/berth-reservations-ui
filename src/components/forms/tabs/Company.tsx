import React from 'react';
import { FormattedMessage } from 'react-intl';

import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import ContactDetails from '../fragments/ContactDetails';
import CompanyDetails from '../fragments/CompanyDetails';
import StyledContainer from '../StyledContainer';

type Props = {
  prefix: string;
};

export default ({ prefix }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.company.header.title" />
    <CompanyDetails />
    <PostalDetails />
    <FormattedMessage tagName="h3" id="form.company.header.contact_person" />
    <FullName />
    <ContactDetails />
  </StyledContainer>
);
