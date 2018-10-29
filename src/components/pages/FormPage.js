// @flow
import React from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import FormLegend from '../containers/FormLegendContainer';
import Steps from '../containers/StepsContainer';
import Wizard from '../forms/containers/WizardContainer';
import ApplicantDetails from '../forms/pages/ApplicantDetails';
import BoatDetails from '../forms/pages/BoatDetails';
import Submit from '../forms/pages/Submit';

const Content = styled.div`
  background-color: white;
`;

const BoatPage = () => (
  <Layout>
    <Steps />
    <FormLegend />
    <Content>
      <Wizard>
        <ApplicantDetails values={{}} />
        <BoatDetails values={{}} />
        <Submit values={{}} />
      </Wizard>
    </Content>
  </Layout>
);

export default BoatPage;
