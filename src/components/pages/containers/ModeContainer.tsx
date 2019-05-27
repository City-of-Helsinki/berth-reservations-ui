import React, { SFC } from 'react';
import { match as matchType, Redirect, Route, Switch } from 'react-router';
import { applicantTabs, berthSteps, boatTabs, winterSteps } from '../../../constants/StepConstant';
import { FormMode } from '../../../types/form';
import BerthPageContainer from './BerthPageContainer';
import FormPageContainer from './FormPageContainer';
import SelectedAreasPageContainer from './SelectedAreasPageContainer';
import SelectedBerthPageContainer from './SelectedBerthPageContainer';
import WinterBerthPageContainer from './WinterBerthPageContainer';
import WinterFormPageContainer from './WinterFormPageContainer';

const ModeContainer: SFC<{ match: matchType<{ mode: string; locale: string }> }> = ({
  match: {
    params: { mode },
    path
  }
}) => {
  const boatTabParam = `:boatTab(${boatTabs[0]}|${boatTabs[1]}|${boatTabs[2]})`;
  const applicantTabParam = `:applicantTab(${applicantTabs[0]}|${applicantTabs[1]})`;
  const isWinterMode = mode === FormMode.WinterStorage;

  const steps = isWinterMode ? winterSteps : berthSteps;
  return (
    <div className="vene-mode-container">
      <Switch>
        <Route
          exact
          path={`${path}/${steps[1].key}`}
          component={isWinterMode ? SelectedAreasPageContainer : SelectedBerthPageContainer}
        />
        <Route
          exact
          path={`${path}/${steps[2].key}/${boatTabParam}`}
          component={isWinterMode ? WinterFormPageContainer : FormPageContainer}
        />

        <Redirect from={`${path}/${steps[2].key}`} to={`${path}/${steps[2].key}/${boatTabs[0]}`} />

        <Route
          exact
          path={`${path}/${steps[3].key}/${applicantTabParam}`}
          component={isWinterMode ? WinterFormPageContainer : FormPageContainer}
        />

        <Redirect
          exact
          from={`${path}/${steps[3].key}`}
          to={`${path}/${steps[3].key}/${applicantTabs[0]}`}
        />

        <Route
          exact
          path={`${path}/overview}`}
          component={isWinterMode ? WinterFormPageContainer : FormPageContainer}
        />

        <Route
          exact
          path={path}
          component={isWinterMode ? WinterBerthPageContainer : BerthPageContainer}
        />

        <Redirect to={path} />
      </Switch>
    </div>
  );
};

export default ModeContainer;
