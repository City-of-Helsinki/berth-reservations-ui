import { useEffect } from 'react';
import { Redirect, RouteComponentProps, useLocation } from 'react-router-dom';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import authService from '../authService';

export type LoginPageProps = RouteComponentProps;
type LocationState = { from: Location } | null | undefined;

const LoginPage = ({ history }: LoginPageProps) => {
  const authenticated = authService.isAuthenticated();
  const location = useLocation<LocationState>();
  const pathname = location.state?.from?.pathname ?? '/';

  useEffect(() => {
    !authenticated &&
      authService.login(pathname).catch(() => {
        history.replace('/error');
      });
  });

  return authenticated ? <Redirect to={pathname} /> : <LoadingPage />;
};

export default LoginPage;
