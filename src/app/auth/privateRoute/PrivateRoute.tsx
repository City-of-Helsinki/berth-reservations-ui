import React from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';

import { isAuthenticated } from '../authService';

const PrivateRoute = (props: RouteProps) => {
  const location = useLocation();
  const currentLocation = `${location.pathname}${location.search}${location.hash}`;
  const queryString = `?referrer=${encodeURIComponent(currentLocation)}`;

  if (isAuthenticated()) return <Route {...props} />;

  return (
    <Redirect
      to={{
        pathname: `/login${queryString}`,
      }}
    />
  );
};

export default PrivateRoute;
