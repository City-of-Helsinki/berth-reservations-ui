import React from 'react';
import { IntlProvider } from 'react-intl';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';
import messages from '../config/translations';

import BerthPage from './pages/berthPage/BerthPageContainer';
import FormPage from './pages/formPage/FormPageContainer';
import WinterFormPage from './pages/formPage/WinterFormPageContainer';
import FrontPage from './pages/FrontPage/FrontPage';
import SelectedAreasPage from './pages/selectedAreaPage/SelectedAreasPageContainer';
import SelectedBerthPage from './pages/selectedBerthPage/SelectedBerthPageContainer';
import ThankYouPage from './pages/ThankYouPage/ThankYouPageContainer';
import WinterStoragePage from './pages/winterStoragePage/WinterStoragePageContainer';

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
