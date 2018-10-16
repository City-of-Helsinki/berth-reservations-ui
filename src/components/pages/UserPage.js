// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Page from '../Page';

const UserPage = () => (
  <Page>
    <h2>
      <FormattedMessage id="user.title" />
    </h2>
  </Page>
);

export default UserPage;
