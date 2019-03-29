import React from 'react';
import { FormattedMessage } from 'react-intl';

import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import ContactDetails from '../fragments/ContactDetails';
import StyledContainer from '../StyledContainer';

type Props = {
  prefix: string;
};

export default ({ prefix }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.private_person.header.title" />
    <FullName />
    <PostalDetails />
    <ContactDetails />
  </StyledContainer>
);
