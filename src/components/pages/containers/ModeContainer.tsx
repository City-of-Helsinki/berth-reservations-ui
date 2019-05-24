import React, { SFC } from 'react';
import { match as matchType, Route, Switch } from 'react-router';
import { berthSteps, winterSteps } from '../../../constants/StepConstant';
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
  return (
    <div className="vene-mode-container">
      {mode === FormMode.WinterStorage ? (
        <Switch>
          <Route
            exact
            path={`${path}/${winterSteps[1].key}`}
            component={SelectedAreasPageContainer}
          />
          <Route
            exact
            path={`${path}/${winterSteps[2].key}/:boatTab`}
            component={WinterFormPageContainer}
          />

          <Route
            exact
            path={`${path}/${winterSteps[3].key}/:applicantTab`}
            component={WinterFormPageContainer}
          />

          <Route exact path={`${path}/overview}`} component={WinterFormPageContainer} />
          <Route component={WinterBerthPageContainer} />
        </Switch>
      ) : (
        <Switch>
          <Route
            exact
            path={`${path}/${berthSteps[1].key}`}
            component={SelectedBerthPageContainer}
          />
          <Route
            exact
            path={`${path}/${berthSteps[2].key}/:boatTab`}
            component={FormPageContainer}
          />

          <Route
            exact
            path={`${path}/${berthSteps[3].key}/:applicantTab`}
            component={FormPageContainer}
          />

          <Route exact path={`${path}/overview`} component={FormPageContainer} />

          <Route component={BerthPageContainer} />
        </Switch>
      )}
    </div>
  );
};

export default ModeContainer;
