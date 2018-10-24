// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Layout from './Layout';
import Legend from '../Legend';
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
    <Legend>
      <FormattedMessage tagName="h3" id="page.boat.title" />
      <FormattedMessage tagName="p" id="page.boat.legend" />
    </Legend>
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
