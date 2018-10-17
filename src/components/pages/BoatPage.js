// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Page from '../Page';
import Steps from '../Steps';
import RegisteredBoat from '../forms/RegisteredBoat';
import LocalizedLink from '../LocalizedLink';

const Content = styled.div`
  background-color: white;
  padding: 80px;
`;

type Props = {
  registeredBoat: Object,
  saveRegisteredBoat: Function
};

const BoatPage = ({ registeredBoat, saveRegisteredBoat }: Props) => (
  <Page>
    <Steps>
      <h3>Veneen tiedot</h3>
      <p>
        Venepaikkaa haetaan venekohtaisesti. Anna tässä haettavalla venepaikalla pidettävän veneen
        tiedot. Voit myös hakea venepaikkaa vaikka sinulla ei ole vielä venettä.
      </p>
    </Steps>
    <Content>
      <h2>
        <FormattedMessage id="page.boat.title" />
      </h2>
      <LocalizedLink to={'/'}>
        <FormattedMessage id="site.link.front_page" />
      </LocalizedLink>
      <RegisteredBoat onSubmit={saveRegisteredBoat} initialValues={registeredBoat} />
    </Content>
  </Page>
);

export default BoatPage;
