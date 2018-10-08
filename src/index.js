import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import configureStore from './config/configureStore';
import Foo from './components/containers/FooContainer';
import App from './components/App';

import 'open-city-design/src/scss/main.scss';

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
