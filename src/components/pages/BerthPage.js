// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocalizedLink from '../LocalizedLink';
import Layout from './Layout';

const BerthPage = () => (
  <Layout>
    <h2>
      <FormattedMessage id="page.berths.title" />
    </h2>
    <LocalizedLink to={'/boat'}>
      <FormattedMessage id="page.berths.link.boat_information" />
    </LocalizedLink>
  </Layout>
);

export default BerthPage;
