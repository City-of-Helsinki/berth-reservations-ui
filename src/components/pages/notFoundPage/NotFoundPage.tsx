import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';

import LocalizedLink from '../../common/LocalizedLink';
import Layout from '../../layout/Layout';
import './notFoundPage.scss';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="vene-not-found-page">
        <h2>404</h2>
        <FormattedMessage id="page.not_found.info_text" tagName="p" />
        <LocalizedLink to="/">
          <Button className="vene-not-found-page__front-page-button" outline color="secondary">
            <FormattedMessage id="page.not_found.to_front_page" tagName="span" />
          </Button>
        </LocalizedLink>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
