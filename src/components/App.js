import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to="/foo">Foo-page</Link>
    </header>
  </div>
);

export default App;
