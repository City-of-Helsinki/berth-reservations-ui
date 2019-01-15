import 'react-app-polyfill/ie11';
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import PiwikReactRouter from 'piwik-react-router';
import createHistory from 'history/createBrowserHistory';

import { ThemeProvider } from 'styled-components';
import theme from './config/theme';

import * as serviceWorker from './serviceWorker';
import configureStore from './config/configureStore';

import App from './components/containers/AppContainer';

const { REACT_APP_PIWIK_URL, REACT_APP_PIWIK_ID } = process.env;

const history = createHistory();

const piwik = PiwikReactRouter({
  url: REACT_APP_PIWIK_URL,
  siteId: REACT_APP_PIWIK_ID
});

const Root = () => (
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <Router history={piwik.connectToHistory(history)}>
        <Switch>
          <Redirect exact path="/" to="/fi" />
          <Route path="/:locale" component={App} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<Root />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
