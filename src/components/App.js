// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import BerthPage from './pages/containers/BerthPageContainer';
import FormPage from './pages/containers/FormPageContainer';
import ThankYouPage from './pages/containers/ThankYouPageContainer';
import IntlProvider from './IntlProvider';

type Props = {
  locale: string
};

const App = ({ locale }: Props) => (
  <IntlProvider locale={locale}>
    <Switch>
      <Redirect exact path="/:locale/" to="/:locale/form" />
      <Route exact path="/:locale/berths" component={BerthPage} />
      <Route exact path="/:locale/form" component={FormPage} />
      <Route exact path="/:locale/thank-you" component={ThankYouPage} />
    </Switch>
  </IntlProvider>
);

export default App;
