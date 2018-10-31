// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocalizedLink from '../common/LocalizedLink';
import Layout from '../layout/Layout';

const BerthPage = () => (
  <Layout>
    <FormattedMessage tagName="h2" id="page.berths.title" />
    <LocalizedLink to={'/form'}>
      <FormattedMessage id="page.berths.link.boat_information" />
    </LocalizedLink>
  </Layout>
);

export default BerthPage;
