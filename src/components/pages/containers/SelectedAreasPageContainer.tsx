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

import { BOAT_TYPES_BERTHS_QUERY } from '../../../utils/graphql';
import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';

interface Props {
  selectedBerths: Berths;
  selectedServices: SelectedServices;
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  localePush: Function;
  values: {};
}

const steps = [
  {
    key: 'winter_areas',
    completed: true,
    current: false,
    linkTo: `winter_storage`
  },
  {
    key: 'review_areas',
    completed: false,
    current: true,
    linkTo: undefined
  },
  {
    key: 'boat_information',
    completed: false,
    current: false,
    linkTo: undefined
  },
  {
    key: 'applicant',
    completed: false,
    current: false,
    linkTo: undefined
  },
  {
    key: 'send_application',
    completed: false,
    current: false,
    linkTo: undefined
  }
];

const UnconnectedSelectedBerthPage = (props: Props) => {
  const moveToForm = async () => {
    await props.localePush('/winter_form/registered_boat');
  };

  const handlePrevious = async () => {
    await props.localePush('/winter_storage');
  };

  return (
    <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
      {({
        // error, TODO: handle errors
        data
      }) => {
        const boatTypes = data ? data.boatTypes : [];

        return (
          <SelectedBerthPage
            handlePrevious={handlePrevious}
            moveToForm={moveToForm}
            boatTypes={boatTypes}
            steps={steps}
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
      values: state.forms.values
    }),
    {
      deselectBerth: deselectWinterArea,
      moveUp: moveWinterAreaUp,
      moveDown: moveWinterAreaDown
    }
  )
)(UnconnectedSelectedBerthPage);
