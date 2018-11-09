// @flow
import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import ContactDetails from '../fragments/ContactDetails';
import CompanyDetails from '../fragments/CompanyDetails';

import SectionSelector from '../SectionSelector';

const Content = styled.div``;

type Props = {
  tab: string
};

const ApplicantDetails = ({ tab }: Props) => (
  <Content>
    <SectionSelector
      name="boat"
      selected={tab}
      types={[
        {
          label: 'form.boat_type_selector.private_person.label',
          tab: 'private_person',
          icon: 'individual'
        },
        {
          label: 'form.boat_type_selector.company.label',
          tab: 'company',
          icon: 'business'
        }
      ]}
    />
    {tab === 'private_person' && (
      <Container>
        <FormattedMessage tagName="h3" id="form.private_person.header.title" />
        <FullName prefix="applicant.name" />
        <PostalDetails prefix="applicant.postal" />
        <ContactDetails prefix="applicant.contact" />
      </Container>
    )}
    {tab === 'company' && (
      <Container>
        <FormattedMessage tagName="h3" id="form.company.header.title" />
        <CompanyDetails prefix="applicant.company" />
        <PostalDetails prefix="applicant.postal" />
        <FormattedMessage tagName="h3" id="form.company.header.contact_person" />
        <FullName prefix="applicant.name" />
        <ContactDetails prefix="applicant.contact" />
      </Container>
    )}
  </Content>
);

export default ApplicantDetails;
