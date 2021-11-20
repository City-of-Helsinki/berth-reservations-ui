import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import authService from '../authService';

export type LogoutPageProps = RouteComponentProps;

const LogoutPage = ({ history }: LogoutPageProps) => {
  useEffect(() => {
    authService.logout().catch(() => {
      history.replace('/');
    });
  });

  return <LoadingPage />;
};

export default LogoutPage;
