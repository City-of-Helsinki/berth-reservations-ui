// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Page from '../Page';

const UserPage = () => (
  <Page>
    <p>
      <FormattedMessage id="home.user" />
    </p>
  </Page>
);

export default UserPage;
