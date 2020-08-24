import React from 'react';
import Layout from '../../layout/Layout';
import { Spinner } from '../spinner/Spinner';
import './loadingPage.scss';

const LoadingPage = () => {
  return (
    <Layout>
      <div className="vene-loading-page">
        <Spinner />
      </div>
    </Layout>
  );
};

export { LoadingPage };
