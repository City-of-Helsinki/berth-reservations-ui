// @flow
import React from 'react';
import { Switch, Route } from 'react-router';

import App from './App';
import Foo from './containers/FooContainer';
import Internationalized from './Internationalized';

type Props = {
  locale: string
};

const RouterInternationalized = ({ locale }: Props) => (
  <Internationalized locale={locale}>
    <Switch>
      <Route exact path="/:locale" component={App} />
      <Route exact path="/:locale/foo" component={Foo} />
    </Switch>
  </Internationalized>
);

export default RouterInternationalized;
