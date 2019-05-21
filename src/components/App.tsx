import React from 'react';
import { IntlProvider } from 'react-intl';
import { Redirect, Route, Switch } from 'react-router';
import messages from '../config/translations';

import ThankYouPage from './pages/containers/ThankYouPageContainer';

import { CategoryOptions } from '../types/categoryType';
import CategoryContainer from './pages/containers/CategoryContainer';
import SelectedAreasPage from './pages/containers/SelectedAreasPageContainer';

export interface Props {
  locale: 'fi' | 'en' | 'sv';
}

const localeParam = ':locale(fi|en|sv)';

const categoryParam = `:category(${CategoryOptions.BERTHS}|${CategoryOptions.WINTER_STORAGE})`;

const App = ({ locale }: Props) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    <Switch>
      <Redirect exact path={`/${localeParam}/`} to={`/${localeParam}/${CategoryOptions.BERTHS}`} />

      <Route path={`/${localeParam}/${categoryParam}`} component={CategoryContainer} />
      <Route exact path={`/${localeParam}/thank_you`} component={ThankYouPage} />
      <Route exact path={`/${localeParam}/selected_areas`} component={SelectedAreasPage} />
    </Switch>
  </IntlProvider>
);

export default App;
