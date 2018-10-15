// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocalizedLink from '../LocalizedLink';
import Page from '../Page';

const BerthPage = () => (
  <Page>
    <p>
      <FormattedMessage id="home.hello" />
    </p>
    <LocalizedLink to={'/boat'}>Boat information</LocalizedLink>
  </Page>
);

export default BerthPage;
