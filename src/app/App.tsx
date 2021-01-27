import React, { useEffect } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';

import i18n from '../locales/i18n';
import BerthPage from '../components/pages/berthPage/BerthPageContainer';
import BerthFormPage from '../components/pages/formPage/BerthFormPageContainer';
import WinterFormPage from '../components/pages/formPage/WinterFormPageContainer';
import UnmarkedWinterFormPage from '../components/pages/formPage/UnmarkedWinterFormPageContainer';
import FrontPage from '../components/pages/frontPage/FrontPage';
import ApplicationThankYouPage from '../components/pages/notice/ApplicationSentPage';
import NotFoundPage from '../components/pages/notice/NotFoundPage';
import NoticeSentPage from '../components/pages/notice/NoticeSentPage';
import SelectedAreaPage from '../components/pages/selectedAreaPage/SelectedAreaPageContainer';
import SelectedBerthPage from '../components/pages/selectedBerthPage/SelectedBerthPageContainer';
import WinterStoragePage from '../components/pages/winterStoragePage/WinterStoragePageContainer';
import UnmarkedWinterStoragePage from '../components/pages/unmarkedWinterStoragePage/UnmarkedWinterStoragePageContainer';
import { ApplicationType } from '../types/applicationType';
import { LocaleOpts } from '../types/intl';
import PaymentPageContainer from '../components/pages/paymentPage/PaymentPageContainer';
import { PaymentResultContainer } from '../components/pages/paymentResultPage/PaymentResultContainer';
import CancelOrderPageContainer from '../components/pages/cancelOrderPage/CancelOrderPageContainer';

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
      <Route exact path={`/${localeParam}/${unmarkedWsParam}`} component={UnmarkedWinterStoragePage} />
      <Route exact path={`/${localeParam}/${unmarkedWsParam}/form`} component={UnmarkedWinterFormPage} />
      <Route exact path={`/${localeParam}/${unmarkedWsParam}/form/:tab`} component={UnmarkedWinterFormPage} />

      <Route exact path={`/${localeParam}/payment`} component={PaymentPageContainer} />
      <Route exact path={`/${localeParam}/payment-result`} component={PaymentResultContainer} />
      <Route exact path={`/${localeParam}/cancel-order`} component={CancelOrderPageContainer} />

      <Route exact path={`/${localeParam}/thank-you`} component={ApplicationThankYouPage} />
      <Route exact path={`/${localeParam}/notice-sent`} component={NoticeSentPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
