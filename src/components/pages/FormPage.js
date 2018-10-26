// @flow
import React from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import FormLegend from '../containers/FormLegendContainer';
import Steps from '../containers/StepsContainer';
import Wizard from '../forms/containers/WizardContainer';
import RegisteredBoat from '../forms/fragments/RegisteredBoat';
import PrivatePerson from '../forms/fragments/PrivatePerson';
import Overview from '../forms/fragments/Overview';

const Content = styled.div`
  background-color: white;
  padding: 4em 8em 2em 8em;
`;

const BoatPage = () => (
  <Layout>
    <Steps />
    <FormLegend />
    <Content>
      <Wizard>
        <RegisteredBoat prefix="registered_boat" />
        <PrivatePerson prefix="private_person" />
        <Overview prefix="overview" />
      </Wizard>
    </Content>
  </Layout>
);

export default BoatPage;
