import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import configureStore from './config/configureStore';
import ThemeProvider from './components/ThemeProvider';
import RouterInternationalized from './components/containers/RouterInternationalizedContainer';

const Root = () => (
  <Provider store={configureStore()}>
    <ThemeProvider>
      <Router>
        <Switch>
          <Redirect exact path="/" to="/fi/berths" />
          <Redirect exact path="/:locale/" to="/:locale/berths" />
          <Route path="/:locale" component={RouterInternationalized} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
