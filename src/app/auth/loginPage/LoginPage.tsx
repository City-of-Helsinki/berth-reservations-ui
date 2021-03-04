import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import authService from '../authService';

export type LoginPageProps = RouteComponentProps;

const LoginPage = ({ history }: LoginPageProps) => {
  useEffect(() => {
    authService.login().catch(() => {
      history.replace('/error');
    });
  });

  return <LoadingPage />;
};

export default LoginPage;
