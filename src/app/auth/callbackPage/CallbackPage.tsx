import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import apolloClient from '../../apolloClient';
import { endLogin } from '../authService';

export type CallbackPageProps = RouteComponentProps;

const CallbackPage = ({ history }: CallbackPageProps) => {
  const client = apolloClient;

  useEffect(() => {
    endLogin()
      .then((user) => {
        client.writeData({
          data: { currentUser: { __typename: 'CurrentUser', ...user.profile } },
        });
        history.replace(user.state.path);
      })
      .catch(() => {
        history.replace('/error');
      });
  });

  return <LoadingPage />;
};

export default CallbackPage;
