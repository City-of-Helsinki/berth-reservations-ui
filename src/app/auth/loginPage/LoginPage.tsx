import React, { useEffect } from 'react';
import { Redirect, RouteComponentProps, useLocation } from 'react-router-dom';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import authService from '../authService';

export type LoginPageProps = RouteComponentProps;

const LoginPage = ({ history }: LoginPageProps) => {
  const searchParams = new URLSearchParams(useLocation().search);
  const referrer = searchParams.get('referrer') || '/';
  const authenticated = authService.isAuthenticated();

  useEffect(() => {
    !authenticated &&
      authService.login(referrer).catch(() => {
        history.replace('/error');
      });
  });

  return authenticated ? <Redirect to={referrer} /> : <LoadingPage />;
};

export default LoginPage;
