import React, { useEffect } from 'react';
import i18n from '../locales/i18n';
import { Route, RouteComponentProps, Switch } from 'react-router';

import BerthPage from './pages/berthPage/BerthPageContainer';
import BerthFormPage from './pages/formPage/BerthFormPageContainer';
import WinterFormPage from './pages/formPage/WinterFormPageContainer';
import FrontPage from './pages/frontPage/FrontPage';
import ApplicationThankYouPage from './pages/notice/ApplicationSentPage';
import NotFoundPage from './pages/notice/NotFoundPage';
import NotificationSentPage from './pages/notice/NotificationSentPage';
import SelectedAreaPage from './pages/selectedAreaPage/SelectedAreaPageContainer';
import SelectedBerthPage from './pages/selectedBerthPage/SelectedBerthPageContainer';
import WinterStoragePage from './pages/winterStoragePage/WinterStoragePageContainer';
import UnmarkedWinterStoragePage from './pages/unmarkedWinterStoragePage/UnmarkedWinterStoragePageContainer';

import { ApplicationType } from '../types/applicationType';
import { LocaleOpts } from '../types/intl';
import { PaymentPageContainer } from './pages/paymentPage/PaymentPageContainer';
import { PaymentResultContainer } from './pages/paymentResultPage/PaymentResultContainer';

type Props = RouteComponentProps<{ locale: LocaleOpts }>;

const localeParam = ':locale(fi|en|sv)';
const berthParam = `:app(${ApplicationType.BerthApp})`;
const winterParam = `:app(${ApplicationType.WinterStorageApp})`;
const unmarkedWsParam = `:app(${ApplicationType.UnmarkedWinterStorageApp})`;

const App = ({
  match: {
    params: { locale = LocaleOpts.FI },
  },
}: Props) => {
  useEffect(() => {
    i18n.changeLanguage(locale);
  });

  return (
    <Switch>
      <Route exact path={`/${localeParam}`} component={FrontPage} />
      <Route exact path={`/${localeParam}/${berthParam}`} component={BerthPage} />
      <Route exact path={`/${localeParam}/${berthParam}/selected`} component={SelectedBerthPage} />
      <Route exact path={`/${localeParam}/${berthParam}/form`} component={BerthFormPage} />
      <Route exact path={`/${localeParam}/${berthParam}/form/:tab`} component={BerthFormPage} />
      <Route exact path={`/${localeParam}/${winterParam}`} component={WinterStoragePage} />
      <Route exact path={`/${localeParam}/${winterParam}/selected`} component={SelectedAreaPage} />
      <Route exact path={`/${localeParam}/${winterParam}/form`} component={WinterFormPage} />
      <Route exact path={`/${localeParam}/${winterParam}/form/:tab`} component={WinterFormPage} />
      <Route
        exact
        path={`/${localeParam}/${unmarkedWsParam}`}
        component={UnmarkedWinterStoragePage}
      />

      <Route exact path={`/${localeParam}/payment`} component={PaymentPageContainer} />
      <Route exact path={`/${localeParam}/payment-result`} component={PaymentResultContainer} />

      <Route exact path={`/${localeParam}/thank-you`} component={ApplicationThankYouPage} />
      <Route exact path={`/${localeParam}/notification-sent`} component={NotificationSentPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
