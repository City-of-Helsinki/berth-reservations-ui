// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../Page';
import RegisteredBoat from '../forms/RegisteredBoat';
import LocalizedLink from '../LocalizedLink';

type Props = {
  registeredBoat: Object,
  saveRegisteredBoat: Function
};

const BoatPage = ({ registeredBoat, saveRegisteredBoat }: Props) => (
  <Page>
    <h2>
      <FormattedMessage id="boat.title" />
    </h2>
    <LocalizedLink to={'/'}>
      <FormattedMessage id="navigation.front_page" />
    </LocalizedLink>
    <RegisteredBoat onSubmit={saveRegisteredBoat} initialValues={registeredBoat} />
  </Page>
);

export default BoatPage;
