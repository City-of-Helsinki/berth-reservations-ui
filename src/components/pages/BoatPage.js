// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Layout from './Layout';
import Legend from '../Legend';
import Steps from '../Steps';
import RegisteredBoat from '../forms/RegisteredBoat';

const Content = styled.div`
  background-color: white;
  padding: 4em 8em 2em 8em;
`;

type Props = {
  registeredBoat: Object,
  saveRegisteredBoat: Function
};

const BoatPage = ({ registeredBoat, saveRegisteredBoat }: Props) => (
  <Layout>
    <Steps />
    <Legend>
      <h3>
        <FormattedMessage id="page.boat.title" />
      </h3>
      <p>
        <FormattedMessage id="page.boat.legend" />
      </p>
    </Legend>
    <Content>
      <RegisteredBoat onSubmit={saveRegisteredBoat} initialValues={registeredBoat} />
    </Content>
  </Layout>
);

export default BoatPage;
