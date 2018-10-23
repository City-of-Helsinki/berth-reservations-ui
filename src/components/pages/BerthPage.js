// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocalizedLink from '../LocalizedLink';
import Layout from './Layout';

const BerthPage = () => (
  <Layout>
    <FormattedMessage tagName="h2" id="page.berths.title" />
    <LocalizedLink to={'/boat'}>
      <FormattedMessage id="page.berths.link.boat_information" />
    </LocalizedLink>
  </Layout>
);

export default BerthPage;
