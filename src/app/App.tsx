import React, { useEffect } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';

import i18n from '../locales/i18n';
import BerthPage from '../features/berth/berthPage/BerthPageContainer';
import BerthFormPage from '../features/berth/berthFormPage/BerthFormPageContainer';
import WinterFormPage from '../features/winterStorage/winterFormPage/WinterFormPageContainer';
import UnmarkedWinterFormPage from '../features/unmarkedWinterStorage/unmarkedWinterFormPage/UnmarkedWinterFormPageContainer';
import FrontPage from '../features/frontPage/FrontPage';
import ApplicationThankYouPage from '../features/notice/ApplicationSentPage';
import NotFoundPage from '../features/notice/NotFoundPage';
import NoticeSentPage from '../features/notice/NoticeSentPage';
import SelectedAreaPage from '../features/winterStorage/selectedAreaPage/SelectedAreaPageContainer';
import SelectedBerthPage from '../features/berth/selectedBerthPage/SelectedBerthPageContainer';
import WinterStoragePage from '../features/winterStorage/winterStoragePage/WinterStoragePageContainer';
import UnmarkedWinterStoragePage from '../features/unmarkedWinterStorage/unmarkedWinterStoragePage/UnmarkedWinterStoragePageContainer';
import { ApplicationType } from '../common/types/applicationType';
import { LocaleOpts } from '../common/types/intl';
import PaymentPageContainer from '../features/payment/paymentPage/PaymentPageContainer';
import { PaymentResultContainer } from '../features/payment/paymentResultPage/PaymentResultContainer';
import CancelOrderPageContainer from '../features/payment/cancelOrderPage/CancelOrderPageContainer';
import ProfilePageContainer from '../features/profile/ProfilePageContainer';

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

      <Route exact path={`/${localeParam}/profile`} component={ProfilePageContainer} />

      <Route exact path={`/${localeParam}/thank-you`} component={ApplicationThankYouPage} />
      <Route exact path={`/${localeParam}/notice-sent`} component={NoticeSentPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
