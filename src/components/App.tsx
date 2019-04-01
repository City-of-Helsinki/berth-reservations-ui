import React from 'react';
import { IntlProvider } from 'react-intl';
import { Redirect, Route, Switch } from 'react-router';
import messages from '../config/translations';

import BerthPage from './pages/containers/BerthPageContainer';
import FormPage from './pages/containers/FormPageContainer';
import SelectedBerthPage from './pages/containers/SelectedBerthPageContainer';
import ThankYouPage from './pages/containers/ThankYouPageContainer';

interface Props {
  locale: 'fi' | 'en' | 'sv';
}

const App = ({ locale }: Props) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    <Switch>
      <Redirect exact path="/:locale/" to="/:locale/berths" />
      <Route exact path="/:locale/berths" component={BerthPage} />
      <Route exact path="/:locale/selected_berths" component={SelectedBerthPage} />
      <Route exact path="/:locale/form" component={FormPage} />
      <Route exact path="/:locale/form/:tab" component={FormPage} />
      <Route exact path="/:locale/thank-you" component={ThankYouPage} />
    </Switch>
  </IntlProvider>
);

export default App;
