import React from 'react';
import { IntlProvider } from 'react-intl';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';
import messages from '../config/translations';

import BerthPage from './pages/containers/BerthPageContainer';
import FormPage from './pages/containers/FormPageContainer';
import SelectedBerthPage from './pages/containers/SelectedBerthPageContainer';
import ThankYouPage from './pages/containers/ThankYouPageContainer';

import SelectedAreasPage from './pages/containers/SelectedAreasPageContainer';
import WinterFormPage from './pages/containers/WinterFormPageContainer';
import WinterStoragePage from './pages/containers/WinterStoragePageContainer';
import FrontPage from './pages/FrontPage/FrontPage';

import { ApplicationType } from '../types/applicationType';
import { LocaleOpts } from '../types/intl';

type Props = RouteComponentProps<{ locale: LocaleOpts }>;

const localeParam = ':locale(fi|en|sv)';
const berthParam = `:app(${ApplicationType.BerthApp})`;
const winterParam = `:app(${ApplicationType.WinterStorageApp})`;

const App = ({
  match: {
    params: { locale }
  }
}: Props) => (
  <IntlProvider
    locale={locale}
    key={locale}
    messages={messages[locale]}
    defaultLocale={LocaleOpts.FI}
  >
    <Switch>
      <Route exact path={`/${localeParam}`} component={FrontPage} />
      <Route exact path={`/${localeParam}/${berthParam}`} component={BerthPage} />
      <Route exact path={`/${localeParam}/${berthParam}/selected`} component={SelectedBerthPage} />
      <Route exact path={`/${localeParam}/${berthParam}/form`} component={FormPage} />
      <Route exact path={`/${localeParam}/${berthParam}/form/:tab`} component={FormPage} />
      <Route exact path={`/${localeParam}/thank-you`} component={ThankYouPage} />
      <Route exact path={`/${localeParam}/${winterParam}`} component={WinterStoragePage} />
      <Route exact path={`/${localeParam}/${winterParam}/selected`} component={SelectedAreasPage} />
      <Route exact path={`/${localeParam}/${winterParam}/form`} component={WinterFormPage} />
      <Route exact path={`/${localeParam}/${winterParam}/form/:tab`} component={WinterFormPage} />
      <Redirect to="/" />
    </Switch>
  </IntlProvider>
);

export default App;
