// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Layout from './Layout';
import Legend from '../Legend';
import Steps from '../Steps';
import Wizard from '../forms/container/WizardContainer';
import RegisteredBoat, { registeredBoat } from '../forms/partials/RegisteredBoat';
import UnRegisteredBoat, { unRegisteredBoat } from '../forms/partials/UnRegisteredBoat';
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
        <UnRegisteredBoat validate={validation(unRegisteredBoat)} />
        <RegisteredBoat validate={validation(registeredBoat)} />
      </Wizard>
    </Content>
  </Layout>
);

export default BoatPage;
