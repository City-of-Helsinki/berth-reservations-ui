// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from './Layout';

const UserPage = () => (
  <Layout>
    <FormattedMessage tagName="h2" id="page.user.title" />
  </Layout>
);

export default UserPage;
