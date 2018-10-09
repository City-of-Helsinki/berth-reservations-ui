import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const App = ({ intl }) => (
  <div className="App">
    <header className="App-header">
      <p>
        <FormattedMessage id="home.hello" defaultMessage="Terve" />
      </p>
      <Link to={`/${intl.locale}/foo`}>Foo-page</Link>
    </header>
  </div >
);

export default injectIntl(App);
