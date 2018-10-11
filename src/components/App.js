// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocalizedLink from './LocalizedLink';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <FormattedMessage id="home.hello" />
      </p>
      <LocalizedLink to={'/foo'}>Foo-page</LocalizedLink>
    </header>
  </div>
);

export default App;
