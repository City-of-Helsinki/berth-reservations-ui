import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import SwitchOfferCompletedPage from '../features/berthSwitchOffer/SwitchOfferCompletedPage';
import ApplicationSentPage from '../features/notice/ApplicationSentPage';
import BerthFormPageContainer from '../features/berth/berthFormPage/BerthFormPageContainer';
import BerthPageContainer from '../features/berth/berthPage/BerthPageContainer';
import BerthSwitchOfferPageContainer from '../features/berthSwitchOffer/BerthSwitchOfferPageContainer';
import ProfilePageContainer from '../features/profile/ProfilePageContainer';
import CallbackPage from './auth/callbackPage/CallbackPage';
import CancelOrderPageContainer from '../features/payment/cancelOrderPage/CancelOrderPageContainer';
import FrontPage from '../features/frontPage/FrontPage';
import LoginPage from './auth/loginPage/LoginPage';
import LogoutPage from './auth/logoutPage/LogoutPage';
import NotFoundPage from '../features/notice/NotFoundPage';
import NoticeSentPage from '../features/notice/NoticeSentPage';
import OrderCancelledPage from '../features/payment/cancelOrderPage/OrderCancelledPage';
import PaymentPageContainer from '../features/payment/paymentPage/PaymentPageContainer';
import PrivateRoute from './auth/privateRoute/PrivateRoute';
import MockProfilePageContainer from '../features/profile/MockProfilePageContainer';
import SelectedBerthPageContainer from '../features/berth/selectedBerthPage/SelectedBerthPageContainer';
import i18n from '../locales/i18n';
import { ApplicationType } from '../common/types/applicationType';
import { LocaleOpts } from '../common/types/intl';
import { PaymentResultContainer } from '../features/payment/paymentResultPage/PaymentResultContainer';
import { isMockProfileRouteEnabled, isUserAuthenticationEnabled } from '../common/utils/featureFlags';

type Props = RouteComponentProps<{ locale: LocaleOpts }>;

const localeParam = ':locale(fi|en|sv)';
const berthParam = `:app(${ApplicationType.BerthApp})`;

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
      {isUserAuthenticationEnabled && <Route path={`/${localeParam}/login`} component={LoginPage} />}
      {isUserAuthenticationEnabled && <Route exact path={`/${localeParam}/logout`} component={LogoutPage} />}
      {isUserAuthenticationEnabled && <Route exact path={`/${localeParam}/callback`} component={CallbackPage} />}

      <Route exact path={`/${localeParam}`} component={FrontPage} />
      <PrivateRoute exact path={`/${localeParam}/profile`} component={ProfilePageContainer} />
      {isMockProfileRouteEnabled && (
        <PrivateRoute exact path={`/${localeParam}/profile/:id`} component={MockProfilePageContainer} />
      )}

      <Route exact path={`/${localeParam}/${berthParam}`} component={BerthPageContainer} />
      <Route exact path={`/${localeParam}/${berthParam}/selected`} component={SelectedBerthPageContainer} />
      <Route exact path={`/${localeParam}/${berthParam}/form`} component={BerthFormPageContainer} />
      <Route exact path={`/${localeParam}/${berthParam}/form/:tab`} component={BerthFormPageContainer} />

      <Route exact path={`/${localeParam}/payment`} component={PaymentPageContainer} />
      <Route exact path={`/${localeParam}/payment-result`} component={PaymentResultContainer} />
      <Route exact path={`/${localeParam}/cancel-order`} component={CancelOrderPageContainer} />
      <Route exact path={`/${localeParam}/order-cancelled`} component={OrderCancelledPage} />
      <Route exact path={`/${localeParam}/offer`} component={BerthSwitchOfferPageContainer} />

      <Route exact path={`/${localeParam}/thank-you`} component={ApplicationSentPage} />
      <Route exact path={`/${localeParam}/offer-thank-you`} component={SwitchOfferCompletedPage} />
      <Route exact path={`/${localeParam}/notice-sent`} component={NoticeSentPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
