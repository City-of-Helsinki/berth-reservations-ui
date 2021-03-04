import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import ApplicationSentPage from '../features/notice/ApplicationSentPage';
import AuthTestPage from '../features/AuthTestPage';
import BerthFormPageContainer from '../features/berth/berthFormPage/BerthFormPageContainer';
import BerthPageContainer from '../features/berth/berthPage/BerthPageContainer';
import CallbackPage from './auth/callbackPage/CallbackPage';
import CancelOrderPageContainer from '../features/payment/cancelOrderPage/CancelOrderPageContainer';
import FrontPage from '../features/frontPage/FrontPage';
import LoginPage from './auth/loginPage/LoginPage';
import NotFoundPage from '../features/notice/NotFoundPage';
import NoticeSentPage from '../features/notice/NoticeSentPage';
import OrderCancelledPage from '../features/payment/cancelOrderPage/OrderCancelledPage';
import PaymentPageContainer from '../features/payment/paymentPage/PaymentPageContainer';
import LogoutPage from './auth/logoutPage/LogoutPage';
import PrivateRoute from './auth/privateRoute/PrivateRoute';
import ProfilePageContainer from '../features/profile/ProfilePageContainer';
import SelectedAreaPageContainer from '../features/winterStorage/selectedAreaPage/SelectedAreaPageContainer';
import SelectedBerthPageContainer from '../features/berth/selectedBerthPage/SelectedBerthPageContainer';
import UnmarkedWinterFormPageContainer from '../features/unmarkedWinterStorage/unmarkedWinterFormPage/UnmarkedWinterFormPageContainer';
import UnmarkedWinterStoragePageContainer from '../features/unmarkedWinterStorage/unmarkedWinterStoragePage/UnmarkedWinterStoragePageContainer';
import WinterFormPageContainer from '../features/winterStorage/winterFormPage/WinterFormPageContainer';
import WinterStoragePageContainer from '../features/winterStorage/winterStoragePage/WinterStoragePageContainer';
import i18n from '../locales/i18n';
import { ApplicationType } from '../common/types/applicationType';
import { LocaleOpts } from '../common/types/intl';
import { PaymentResultContainer } from '../features/payment/paymentResultPage/PaymentResultContainer';

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
      <Route exact path={`/${localeParam}/login`} component={LoginPage} />
      <Route exact path={`/${localeParam}/logout`} component={LogoutPage} />
      <Route exact path={`/${localeParam}/callback`} component={CallbackPage} />
      <PrivateRoute exact path={`/${localeParam}/auth-test`} component={AuthTestPage} />

      <Route exact path={`/${localeParam}`} component={FrontPage} />
      <Route exact path={`/${localeParam}/profile/:id`} component={ProfilePageContainer} />

      <Route exact path={`/${localeParam}/${berthParam}`} component={BerthPageContainer} />
      <Route exact path={`/${localeParam}/${berthParam}/selected`} component={SelectedBerthPageContainer} />
      <Route exact path={`/${localeParam}/${berthParam}/form`} component={BerthFormPageContainer} />
      <Route exact path={`/${localeParam}/${berthParam}/form/:tab`} component={BerthFormPageContainer} />

      <Route exact path={`/${localeParam}/${winterParam}`} component={WinterStoragePageContainer} />
      <Route exact path={`/${localeParam}/${winterParam}/selected`} component={SelectedAreaPageContainer} />
      <Route exact path={`/${localeParam}/${winterParam}/form`} component={WinterFormPageContainer} />
      <Route exact path={`/${localeParam}/${winterParam}/form/:tab`} component={WinterFormPageContainer} />

      <Route exact path={`/${localeParam}/${unmarkedWsParam}`} component={UnmarkedWinterStoragePageContainer} />
      <Route exact path={`/${localeParam}/${unmarkedWsParam}/form`} component={UnmarkedWinterFormPageContainer} />
      <Route exact path={`/${localeParam}/${unmarkedWsParam}/form/:tab`} component={UnmarkedWinterFormPageContainer} />

      <Route exact path={`/${localeParam}/payment`} component={PaymentPageContainer} />
      <Route exact path={`/${localeParam}/payment-result`} component={PaymentResultContainer} />
      <Route exact path={`/${localeParam}/cancel-order`} component={CancelOrderPageContainer} />
      <Route exact path={`/${localeParam}/order-cancelled`} component={OrderCancelledPage} />

      <Route exact path={`/${localeParam}/thank-you`} component={ApplicationSentPage} />
      <Route exact path={`/${localeParam}/notice-sent`} component={NoticeSentPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
