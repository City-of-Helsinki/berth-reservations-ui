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

const ModeContainer: SFC<{ match: matchType<{ mode: string; locale: string }> }> = ({
  match: {
    params: { mode },
    url
  }
}) => {
  return (
    <div className="vene-mode-container">
      {mode === FormMode.Winter ? (
        <Switch>
          <Route exact path={url} component={WinterBerthPageContainer} />
          <Route
            exact
            path={`${url}/${winterSteps[1].key}`}
            component={SelectedAreasPageContainer}
          />
          <Route
            exact
            path={`${url}/${winterSteps[2].key}/:boatTab`}
            component={WinterFormPageContainer}
          />

          <Route
            exact
            path={`${url}/${winterSteps[3].key}/:applicantTab`}
            component={WinterFormPageContainer}
          />

          <Route exact path={`${url}/overview}`} component={WinterFormPageContainer} />

          <Redirect to={url} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={url} component={BerthPageContainer} />
          <Route
            exact
            path={`${url}/${berthSteps[1].key}`}
            component={SelectedBerthPageContainer}
          />
          <Route
            exact
            path={`${url}/${berthSteps[2].key}/:boatTab`}
            component={FormPageContainer}
          />

          <Route
            exact
            path={`${url}/${berthSteps[3].key}/:applicantTab`}
            component={FormPageContainer}
          />

          <Route exact path={`${url}/overview`} component={FormPageContainer} />

          <Redirect to={url} />
        </Switch>
      )}
    </div>
  );
};

export default ModeContainer;
