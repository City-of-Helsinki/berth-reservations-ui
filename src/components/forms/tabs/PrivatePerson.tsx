import React from 'react';
import { FormattedMessage } from 'react-intl';

import ContactDetails from '../fragments/ContactDetails';
import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import StyledContainer from '../StyledContainer';

interface Props {
  prefix: string;
}

export default ({ prefix }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.private_person.header.title" />
    <FullName />
    <PostalDetails />
    <ContactDetails />
  </StyledContainer>
);
