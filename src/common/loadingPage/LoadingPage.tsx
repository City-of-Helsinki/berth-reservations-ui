import React from 'react';
import Layout from '../layout/Layout';
import './loadingPage.scss';
import Spinner from '../spinner/Spinner';

const LoadingPage = () => {
  return (
    <Layout>
      <div className="vene-loading-page">
        <Spinner />
      </div>
    </Layout>
  );
};

export default LoadingPage;
