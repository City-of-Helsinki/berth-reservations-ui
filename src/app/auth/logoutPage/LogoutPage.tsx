import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import { logout } from '../authService';

export type LogoutPageProps = RouteComponentProps;

const LogoutPage = ({ history }: LogoutPageProps) => {
  useEffect(() => {
    logout().catch(() => {
      history.replace('/error');
    });
  });

  return <LoadingPage />;
};

export default LogoutPage;
