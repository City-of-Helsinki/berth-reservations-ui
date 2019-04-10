import '@babel/polyfill';
import 'react-app-polyfill/ie11';

import * as Sentry from '@sentry/browser';
import createHistory from 'history/createBrowserHistory';
import PiwikReactRouter from 'piwik-react-router';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import './assets/styles/main.scss';

import configureStore from './config/configureStore';
import initApolloClient from './config/initApolloClient';
import * as serviceWorker from './serviceWorker';

import App from './components/containers/AppContainer';

const {
  REACT_APP_PIWIK_URL,
  REACT_APP_PIWIK_ID,
  REACT_APP_SENTRY_DSN,
  REACT_APP_SENTRY_ENVIRONMENT
} = process.env;

const history = createHistory();

const piwik = PiwikReactRouter({
  url: REACT_APP_PIWIK_URL,
  siteId: REACT_APP_PIWIK_ID
});

Sentry.init({
  environment: REACT_APP_SENTRY_ENVIRONMENT,
  dsn: REACT_APP_SENTRY_DSN
});

const client = initApolloClient();

const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <Router history={piwik.connectToHistory(history)}>
        <Switch>
          <Redirect exact path="/" to="/fi" />
          <Route path="/:locale" component={App} />
        </Switch>
      </Router>
    </Provider>
  </ApolloProvider>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<Root />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
