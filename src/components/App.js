// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { IntlProvider } from 'react-intl';
import messages from '../config/translations';

import BerthPage from './pages/containers/BerthPageContainer';
import FormPage from './pages/containers/FormPageContainer';
import ThankYouPage from './pages/containers/ThankYouPageContainer';

type Props = {
  locale: string
};

const App = ({ locale }: Props) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    <Switch>
      <Redirect exact path="/:locale/" to="/:locale/berths" />
      <Route exact path="/:locale/berths" component={BerthPage} />
      <Route exact path="/:locale/form" component={FormPage} />
      <Route exact path="/:locale/form/:tab" component={FormPage} />
      <Route exact path="/:locale/thank-you" component={ThankYouPage} />
    </Switch>
  </IntlProvider>
);

export default App;
