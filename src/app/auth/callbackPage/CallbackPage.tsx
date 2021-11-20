import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import { CREATE_BERTH_PROFILE_MUTATION } from '../../../features/queries';
import apolloClient from '../../apolloClient';
import authService from '../authService';

export type CallbackPageProps = RouteComponentProps;

const CallbackPage = ({ history }: CallbackPageProps) => {
  const client = apolloClient;
  const [createMyBerthProfile] = useMutation(CREATE_BERTH_PROFILE_MUTATION);

  useEffect(() => {
    const endLogin = async () => {
      try {
        const user = await authService.endLogin();

        // Create berth profile if it doesn't exist. If the profile does exist, this mutation
        // returns the existing profile.
        await createMyBerthProfile({
          variables: {
            input: {
              profileToken: authService.getProfileToken(),
            },
          },
        });

        const { name, email, sub, rest } = user.profile;

        client.writeData({
          data: {
            currentUser: {
              __typename: 'CurrentUser',
              ...rest,
              name,
              email,
              id: sub,
            },
          },
        });

        history.replace(user.state.path);
      } catch (e) {
        // TODO: handle error
      }
    };

    endLogin();
  }, [client, createMyBerthProfile, history]);

  return <LoadingPage disableNav />;
};

export default CallbackPage;
