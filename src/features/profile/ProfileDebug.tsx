import { useMutation } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-client';
import React from 'react';

import { ServiceType } from '../../__generated__/globalTypes';
import { AddServiceConnection, AddServiceConnectionVariables } from '../__generated__/AddServiceConnection';
import { ADD_SERVICE_CONNECTION } from '../queries';

// Adopt this component's functions for production if needed
export const ProfileDebug = ({ error }: { error?: ApolloError }) => {
  const [_addServiceConnection] = useMutation<AddServiceConnection, AddServiceConnectionVariables>(
    ADD_SERVICE_CONNECTION,
    {
      variables: {
        input: {
          serviceConnection: {
            enabled: true,
            service: {
              type: ServiceType.BERTH,
            },
          },
        },
      },
    }
  );

  const reloadPage = () => {
    window.location.reload(false);
  };

  const addServiceConnection = () => {
    _addServiceConnection().then(() => reloadPage());
  };

  const style: React.CSSProperties = {
    background: 'white',
    padding: '10px',
    position: 'fixed',
    border: '1px solid black',
    top: 0,
    right: 0,
    zIndex: 1000,
  };

  return (
    <div style={style}>
      <h1>Profile debug</h1>

      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

      <p>
        <a href="https://profiili.test.kuva.hel.ninja/" rel="noopener noreferrer" target="_blank">
          <button type="button">Open Profile UI</button>
        </a>
      </p>

      <p>
        <button type="button" onClick={() => addServiceConnection()}>
          Add service connection
        </button>
      </p>

      <p>
        <button type="button" onClick={() => reloadPage()}>
          Reload page
        </button>
      </p>
    </div>
  );
};
