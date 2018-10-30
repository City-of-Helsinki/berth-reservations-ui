// @flow
import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import ContactDetails from '../fragments/ContactDetails';
import CompanyDetails from '../fragments/CompanyDetails';

import SectionsSelector from '../SectionsSelector';

const Content = styled.div``;

type Props = {
  values: any
};

const ApplicantDetails = ({ values }: Props) => {
  const selected = get(values, ['sections', 'applicant']);
  return (
    <Content>
      <SectionsSelector
        name="applicant"
        selected={selected}
        types={[
          {
            label: 'form.boat_type_selector.private_person.label',
            value: 'private_person',
            iconName: 'individual'
          },
          {
            label: 'form.boat_type_selector.company.label',
            value: 'company',
            iconName: 'business'
          }
        ]}
      />
      {selected === 'private_person' && (
        <Container>
          <FormattedMessage tagName="h3" id="form.private_person.header.title" />
          <FullName prefix="applicant.name" />
          <PostalDetails prefix="applicant.postal" />
          <ContactDetails prefix="applicant.contact" />
        </Container>
      )}
      {selected === 'company' && (
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
};

export default ApplicantDetails;
