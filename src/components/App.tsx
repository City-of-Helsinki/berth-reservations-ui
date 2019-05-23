import React from 'react';
import { IntlProvider } from 'react-intl';
import { Redirect, Route, Switch } from 'react-router';
import messages from '../config/translations';

import ThankYouPage from './pages/containers/ThankYouPageContainer';

import { FormMode } from '../types/form';
import ModeContainer from './pages/containers/ModeContainer';

export interface Props {
  locale: 'fi' | 'en' | 'sv';
}

const localeParam = ':locale(fi|en|sv)';

const modeParams = `:mode(${FormMode.Berth}|${FormMode.Winter})`;

const App = ({ locale }: Props) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    <Switch>
      <Redirect exact path={`/${localeParam}`} to={`/${localeParam}/${FormMode.Berth}`} />

      <Route path={`/${localeParam}/${modeParams}`} component={ModeContainer} />
      <Route exact path={`/${localeParam}/thank_you`} component={ThankYouPage} />
    </Switch>
  </IntlProvider>
);

export default App;
