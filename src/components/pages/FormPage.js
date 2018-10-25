// @flow
import React from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import FormLegend from '../containers/FormLegendContainer';
import Steps from '../containers/StepsContainer';
import Wizard from '../forms/containers/WizardContainer';
import RegisteredBoat, { schema as RegisteredBoatSchema } from '../forms/fragments/RegisteredBoat';
import PrivatePerson, { schema as PrivatePersonSchema } from '../forms/fragments/PrivatePerson';
import Overview, { schema as OverviewSchema } from '../forms/fragments/Overview';
import validation from '../../utils/formValidation';

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
        <RegisteredBoat validate={validation(RegisteredBoatSchema)} />
        <PrivatePerson validate={validation(PrivatePersonSchema)} />
        <Overview validate={validation(OverviewSchema)} />
      </Wizard>
    </Content>
  </Layout>
);

export default BoatPage;
