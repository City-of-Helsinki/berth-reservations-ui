import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <FormattedMessage id="home.hello" defaultMessage="Terve" />
      </p>
      <Link to="/foo">Foo-page</Link>
    </header>
  </div>
);

export default App;
