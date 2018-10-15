// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

const UserPage = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <FormattedMessage id="home.user" />
      </p>
    </header>
  </div>
);

export default UserPage;
