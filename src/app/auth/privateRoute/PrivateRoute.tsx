import { useTranslation } from 'react-i18next';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';

import { localizedLink } from '../../../common/layout/navbar/utils';
import { isUserAuthenticationEnabled } from '../../../common/utils/featureFlags';
import NotFoundPage from '../../../features/notice/NotFoundPage';
import authService from '../authService';

const PrivateRoute = (props: RouteProps) => {
  const {
    i18n: { language },
  } = useTranslation();
  const location = useLocation();

  if (!isUserAuthenticationEnabled) return <NotFoundPage />;
  if (authService.isAuthenticated()) return <Route {...props} />;

  return (
    <Redirect
      to={{
        pathname: localizedLink('/login', language),
        state: {
          from: location,
        },
      }}
    />
  );
};

export default PrivateRoute;
