// @flow
import React from 'react';
import { Switch, Route } from 'react-router';

import BerthPageContainer from './containers/BerthPageContainer';
import FormPage from './pages/FormPage';
import ThankyouPage from './pages/ThankyouPage';
import Internationalized from './Internationalized';

type Props = {
  locale: string
};

const RouterInternationalized = ({ locale }: Props) => (
  <Internationalized locale={locale}>
    <Switch>
      <Route exact path="/:locale/berths" component={BerthPageContainer} />
      <Route exact path="/:locale/form" component={FormPage} />
      <Route exact path="/:locale/thank-you" component={ThankyouPage} />
    </Switch>
  </Internationalized>
);

export default RouterInternationalized;
