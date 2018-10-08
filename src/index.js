import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import configureStore from './config/configureStore';
import App from './components/containers/AppContainer';
import Foo from './components/containers/FooContainer';

const Root = () => (
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/foo" component={Foo} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
