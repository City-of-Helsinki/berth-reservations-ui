import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import apolloClient from '../../apolloClient';
import authService from '../authService';

export type CallbackPageProps = RouteComponentProps;

const CallbackPage = ({ history }: CallbackPageProps) => {
  const client = apolloClient;

  useEffect(() => {
    authService
      .endLogin()
      .then((user) => {
        client.writeData({
          data: { currentUser: { __typename: 'CurrentUser', ...user.profile } },
        });
        history.replace(user.state.path);
      })
      .catch(() => {
        // TODO: handle error
      });
  });

  return <LoadingPage />;
};

export default CallbackPage;
