import React, { SFC, useEffect } from 'react';
import { connect } from 'react-redux';
import { match as matchType, Redirect, Route, Switch } from 'react-router';
import { berthRoutes, winterRoutes } from '../../../constants/StepsConstants';
import { generateSteps as generateStepActions } from '../../../redux/actions/StepsActions';
import { CategoryOptions } from '../../../types/categoryType';
import BerthPageContainer from './BerthPageContainer';
import FormPageContainer from './FormPageContainer';
import SelectedAreasPageContainer from './SelectedAreasPageContainer';
import SelectedBerthPageContainer from './SelectedBerthPageContainer';
import WinterBerthPageContainer from './WinterBerthPageContainer';
import WinterFormPageContainer from './WinterFormPageContainer';

const CategoryContainer: SFC<{
  match: matchType<{ category: CategoryOptions }>;
  generateSteps: Function;
}> = ({
  match: {
    params: { category },
    path
  },
  generateSteps
}) => {
  useEffect(() => {
    if (category && category === CategoryOptions.WINTER_STORAGE) {
      generateSteps(winterRoutes, category);
    } else {
      generateSteps(berthRoutes, CategoryOptions.BERTHS);
    }
  });

  return (
    <div className="vene-category-container">
      {!category ||
        (category === CategoryOptions.BERTHS && (
          <Switch>
            <Route exact path={`${path}/selected_berths`} component={SelectedBerthPageContainer} />
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

const mapDisPatchToProps = {
  generateSteps: generateStepActions
};

export default connect(
  null,
  mapDisPatchToProps
)(CategoryContainer);
