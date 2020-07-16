import React from 'react';
import { IntlProvider } from 'react-intl';
import { Route, RouteComponentProps, Switch } from 'react-router';
import messages from '../config/translations';

import BerthPage from './pages/berthPage/BerthPageContainer';
import BerthFormPage from './pages/formPage/BerthFormPageContainer';
import WinterFormPage from './pages/formPage/WinterFormPageContainer';
import FrontPage from './pages/frontPage/FrontPage';
import ApplicationThankYouPage from './pages/notice/ApplicationSentPage';
import NotFoundPage from './pages/notice/NotFoundPage';
import NotificationSentPage from './pages/notice/NotificationSentPage';
import AlreadyPaidPage from './pages/notice/paymentError/AlreadyPaidPage';
import CustomerInformationErrorPage from './pages/notice/paymentError/CustomerInformationErrorPage';
import GeneralErrorPage from './pages/notice/paymentError/GeneralErrorPage';
import PastDueDatePage from './pages/notice/paymentError/PastDueDatePage';
import PaymentReceivedPage from './pages/notice/PaymentReceivedPage';
import SelectedAreaPage from './pages/selectedAreaPage/SelectedAreaPageContainer';
import SelectedBerthPage from './pages/selectedBerthPage/SelectedBerthPageContainer';
import WinterStoragePage from './pages/winterStoragePage/WinterStoragePageContainer';

import { ApplicationType } from '../types/applicationType';
import { LocaleOpts } from '../types/intl';

type Props = RouteComponentProps<{ locale: LocaleOpts }>;

const localeParam = ':locale(fi|en|sv)';
const berthParam = `:app(${ApplicationType.BerthApp})`;
const winterParam = `:app(${ApplicationType.WinterStorageApp})`;

const App = ({
  match: {
    params: { locale = LocaleOpts.FI },
  },
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
      <Route exact path={`/${localeParam}/${berthParam}/form`} component={BerthFormPage} />
      <Route exact path={`/${localeParam}/${berthParam}/form/:tab`} component={BerthFormPage} />
      <Route exact path={`/${localeParam}/${winterParam}`} component={WinterStoragePage} />
      <Route exact path={`/${localeParam}/${winterParam}/selected`} component={SelectedAreaPage} />
      <Route exact path={`/${localeParam}/${winterParam}/form`} component={WinterFormPage} />
      <Route exact path={`/${localeParam}/${winterParam}/form/:tab`} component={WinterFormPage} />

      <Route exact path={`/${localeParam}/thank-you`} component={ApplicationThankYouPage} />
      <Route exact path={`/${localeParam}/notification-sent`} component={NotificationSentPage} />
      <Route exact path={`/${localeParam}/payment-received`} component={PaymentReceivedPage} />
      <Route exact path={`/${localeParam}/already-paid`} component={AlreadyPaidPage} />
      <Route
        exact
        path={`/${localeParam}/customer-information-error`}
        component={CustomerInformationErrorPage}
      />
      <Route exact path={`/${localeParam}/general-error`} component={GeneralErrorPage} />
      <Route exact path={`/${localeParam}/past-due-date`} component={PastDueDatePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </IntlProvider>
);

export default App;
