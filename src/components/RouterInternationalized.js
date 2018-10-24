// @flow
import React from 'react';
import { Switch, Route } from 'react-router';

import BerthPageContainer from './containers/BerthPageContainer';
import BoatPageContainer from './containers/BoatPageContainer';
import UserPageContainer from './containers/UserPageContainer';
import FormPage from './pages/FormPage';
import Internationalized from './Internationalized';

type Props = {
  locale: string
};

const RouterInternationalized = ({ locale }: Props) => (
  <Internationalized locale={locale}>
    <Switch>
      <Route exact path="/:locale/berths" component={BerthPageContainer} />
      <Route exact path="/:locale/boat" component={BoatPageContainer} />
      <Route exact path="/:locale/user" component={UserPageContainer} />
      <Route exact path="/:locale/form" component={FormPage} />
    </Switch>
  </Internationalized>
);

export default RouterInternationalized;
