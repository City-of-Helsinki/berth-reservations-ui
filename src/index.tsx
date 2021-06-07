import 'focus-visible';
import 'react-app-polyfill/ie11';

import * as Sentry from '@sentry/browser';
import { createBrowserHistory } from 'history';
import PiwikReactRouter from 'piwik-react-router';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './locales/i18n';
import './assets/styles/main.scss';

import { version } from '../package.json';
import apolloClient from './app/apolloClient';
import configureStore from './redux/store/configureStore';
import App from './app/App';

const { REACT_APP_PIWIK_URL, REACT_APP_PIWIK_ID, REACT_APP_SENTRY_DSN, REACT_APP_SENTRY_ENVIRONMENT } = process.env;

const history = createBrowserHistory();

const piwik = PiwikReactRouter({
  url: REACT_APP_PIWIK_URL,
  siteId: REACT_APP_PIWIK_ID,
});

Sentry.init({
  environment: REACT_APP_SENTRY_ENVIRONMENT,
  dsn: REACT_APP_SENTRY_DSN,
});

const { store, persistor } = configureStore();

const localVersion = localStorage.getItem('venepaikka_version');

// Purge user's localStorage to ensure no persisted data in sync with version
if (localVersion !== version) {
  persistor.purge();
  localStorage.setItem('venepaikka_version', version);
}

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={piwik.connectToHistory(history)}>
          <Switch>
            <Route path="/:locale(fi|sv|en)" component={App} />
            <Route render={({ location: { pathname, hash } }) => <Redirect to={`/fi${pathname}${hash}`} />} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<Root />, rootElement);
}
