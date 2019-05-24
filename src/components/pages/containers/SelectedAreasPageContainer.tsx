import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  deselectWinterArea,
  moveWinterAreaDown,
  moveWinterAreaUp
} from '../../../redux/actions/WinterAreaActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import SelectedBerthPage from '../BerthPage/SelectedBerthPage/SelectedBerthPage';

import { Store } from '../../../redux/types';
import { SelectedServices } from '../../../types/services';
import { Berths } from '../../berths/types';

import { completeWinterStep } from '../../../redux/actions/StepActions';
import { BOAT_TYPES_BERTHS_QUERY } from '../../../utils/graphql';
import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';
import { Steps } from '../../steps/StepTypes';

interface Props {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  localePush: Function;
  values: {};
  completeStep: Function;
  steps: Steps;
}

const UnconnectedSelectedBerthPage = (props: Props) => {
  return (
    <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
      {({
        // error, TODO: handle errors
        data
      }) => {
        const boatTypes = data ? data.boatTypes : [];

        return (
          <SelectedBerthPage
            boatTypes={boatTypes}
            data={data || null}
            initialValues={{}}
            legend={{
              title: 'legend.selected_areas.title',
              legend: 'legend.selected_areas.legend'
            }}
            {...props}
          />
        );
      }}
    </BoatsBerthsQuery>
  );
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      selectedBerths: state.winterAreas.selectedWinterAreas,
      selectedServices: state.winterAreas.selectedWinterServices,
      values: state.forms.values,
      steps: state.steps.winterSteps.toJS()
    }),
    {
      deselectBerth: deselectWinterArea,
      moveUp: moveWinterAreaUp,
      moveDown: moveWinterAreaDown,
      completeStep: completeWinterStep
    }
  )
)(UnconnectedSelectedBerthPage);
