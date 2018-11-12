// @flow
import React from 'react';
import styled from 'styled-components';

import SectionSelector from '../SectionSelector';
import PrivatePerson from '../tabs/PrivatePerson';
import Company from '../tabs/Company';

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
    {tab === 'private_person' && <PrivatePerson prefix="applicant" />}
    {tab === 'company' && <Company prefix="applicant" />}
  </Content>
);

export default ApplicantDetails;
