import React, { SFC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { CategoryOptions } from '../../../types/categoryType';
import BerthPageContainer from './BerthPageContainer';
import FormPageContainer from './FormPageContainer';
import SelectedAreasPageContainer from './SelectedAreasPageContainer';
import SelectedBerthPageContainer from './SelectedBerthPageContainer';
import WinterBerthPageContainer from './WinterBerthPageContainer';
import WinterFormPageContainer from './WinterFormPageContainer';

const CategoryContainer: SFC<RouteComponentProps<{ category: CategoryOptions }>> = ({
  match: {
    params: { category },
    path
  }
}) => {
  return (
    <div className="vene-category-container">
      {!category ||
        (category === CategoryOptions.BERTHS && (
          <Switch>
            <Route exact path={`${path}/selected`} component={SelectedBerthPageContainer} />
            <Route exact path={`${path}/form`} component={FormPageContainer} />
            <Route exact path={`${path}/form/:tab`} component={FormPageContainer} />
            <Route exact path={`${path}/`} component={BerthPageContainer} />

            <Redirect to={`${path}/`} />
          </Switch>
        ))}
      {category === CategoryOptions.WINTER_STORAGE && (
        <Switch>
          <Route exact path={`${path}/selected_areas`} component={SelectedAreasPageContainer} />
          <Route exact path={`${path}/form`} component={WinterFormPageContainer} />
          <Route exact path={`${path}/form/:tab`} component={WinterFormPageContainer} />
          <Route exact path={`${path}/`} component={WinterBerthPageContainer} />

          <Redirect to={`${path}/`} />
        </Switch>
      )}
    </div>
  );
};

export default CategoryContainer;
