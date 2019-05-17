import '@babel/polyfill';
import 'react-app-polyfill/ie11';

import * as Sentry from '@sentry/browser';
import { ConnectedRouter } from 'connected-react-router';
import PiwikReactRouter from 'piwik-react-router';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './assets/styles/main.scss';

import initApolloClient from './config/initApolloClient';
import configureStore, { history } from './redux/store/configureStore';
import * as serviceWorker from './serviceWorker';

import App from './components/containers/AppContainer';

const {
  REACT_APP_PIWIK_URL,
  REACT_APP_PIWIK_ID,
  REACT_APP_SENTRY_DSN,
  REACT_APP_SENTRY_ENVIRONMENT
} = process.env;

const piwik = PiwikReactRouter({
  url: REACT_APP_PIWIK_URL,
  siteId: REACT_APP_PIWIK_ID
});

Sentry.init({
  environment: REACT_APP_SENTRY_ENVIRONMENT,
  dsn: REACT_APP_SENTRY_DSN
});

const client = initApolloClient();
const { store, persistor } = configureStore();

const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={piwik.connectToHistory(history)}>
          <Switch>
            <Redirect exact path="/" to="/fi" />
            <Route path="/:locale" component={App} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
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
