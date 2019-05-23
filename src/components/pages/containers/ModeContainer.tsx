import React, { SFC } from 'react';
import { match as matchType, Redirect, Route, Switch } from 'react-router';
import { berthSteps, winterSteps } from '../../../constants/StepConstant';
import { FormMode } from '../../../types/form';
import BerthPageContainer from './BerthPageContainer';
import FormPageContainer from './FormPageContainer';
import SelectedAreasPageContainer from './SelectedAreasPageContainer';
import SelectedBerthPageContainer from './SelectedBerthPageContainer';
import WinterBerthPageContainer from './WinterBerthPageContainer';
import WinterFormPageContainer from './WinterFormPageContainer';

const ModeContainer: SFC<{ match: matchType<{ mode: string }> }> = ({
  match: {
    params: { mode }
  }
}) => {
  return (
    <div className="vene-mode-container">
      {mode === FormMode.Winter ? (
        <Switch>
          <Route exact path={winterSteps[0].linkTo} component={WinterBerthPageContainer} />
          <Route exact path={winterSteps[1].linkTo} component={SelectedAreasPageContainer} />
          <Route
            exact
            path={`${winterSteps[2].linkTo}/:boatTab`}
            component={WinterFormPageContainer}
          />

          <Route
            exact
            path={`${winterSteps[3].linkTo}/:applicantTab`}
            component={WinterFormPageContainer}
          />

          <Route exact path={winterSteps[4].linkTo} component={WinterFormPageContainer} />

          <Redirect to={winterSteps[0].linkTo} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={berthSteps[0].linkTo} component={BerthPageContainer} />
          <Route exact path={berthSteps[1].linkTo} component={SelectedBerthPageContainer} />

          <Route exact path={`${berthSteps[2].linkTo}/:boatTab`} component={FormPageContainer} />
          <Route
            exact
            path={`${berthSteps[3].linkTo}/:applicantTab`}
            component={FormPageContainer}
          />

          <Route exact path={berthSteps[4].linkTo} component={FormPageContainer} />

          <Redirect to={berthSteps[0].linkTo} />
        </Switch>
      )}
    </div>
  );
};

export default ModeContainer;
