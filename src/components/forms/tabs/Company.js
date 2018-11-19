// @flow
import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import ContactDetails from '../fragments/ContactDetails';
import CompanyDetails from '../fragments/CompanyDetails';

type Props = {
  prefix: string
};

const StyledContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default ({ prefix }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.company.header.title" />
    <CompanyDetails prefix={`${prefix}.company`} />
    <PostalDetails prefix={`${prefix}.postal`} />
    <FormattedMessage tagName="h3" id="form.company.header.contact_person" />
    <FullName prefix={`${prefix}.name`} />
    <ContactDetails prefix={`${prefix}.contact`} />
  </StyledContainer>
);
