// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from './Layout';

const UserPage = () => (
  <Layout>
    <h2>
      <FormattedMessage id="page.user.title" />
    </h2>
  </Layout>
);

export default UserPage;
