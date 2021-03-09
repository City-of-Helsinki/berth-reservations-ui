import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';

import { localizedLink } from '../../../common/layout/navbar/utils';
import authService from '../authService';

const PrivateRoute = (props: RouteProps) => {
  const {
    i18n: { language },
  } = useTranslation();
  const location = useLocation();
  const currentLocation = `${location.pathname}${location.search}${location.hash}`;
  const queryString = `?referrer=${encodeURIComponent(currentLocation)}`;

  if (authService.isAuthenticated()) return <Route {...props} />;

  return (
    <Redirect
      to={{
        pathname: localizedLink(`/login${queryString}`, language),
      }}
    />
  );
};

export default PrivateRoute;
