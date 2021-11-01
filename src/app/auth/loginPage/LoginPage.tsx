import { useEffect } from 'react';
import { Redirect, RouteComponentProps, useLocation } from 'react-router-dom';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import authService from '../authService';

export type LoginPageProps = RouteComponentProps;

const LoginPage = ({ history }: LoginPageProps) => {
  const referrer = useLocation<{ referrer: string }>().state?.referrer || '/';
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
