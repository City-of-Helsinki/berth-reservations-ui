// @flow
import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { get } from 'lodash';

import PrivatePerson from '../fragments/PrivatePerson';
import Company from '../fragments/Company';

import FormTypeSelector from '../fragments/FormTypeSelector';

const Content = styled.div``;

type Props = {
  values: any
};

const ApplicantDetails = ({ values }: Props) => {
  const selected = get(values, ['select_form_type', 'applicant_details']);
  return (
    <Content>
      <FormTypeSelector
        name="applicant_details"
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
      <Container>
        {selected === 'private_person' && <PrivatePerson prefix="private_person" />}
        {selected === 'company' && <Company prefix="company" />}
      </Container>
    </Content>
  );
};

export default ApplicantDetails;
