// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocalizedLink from '../LocalizedLink';

const BerthPage = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <FormattedMessage id="home.hello" />
      </p>
      <LocalizedLink to={'/boat'}>Boat information</LocalizedLink>
    </header>
  </div>
);

export default BerthPage;
