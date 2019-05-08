import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { deselectBerth, moveDown, moveUp } from '../../../redux/actions/BerthActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import SelectedBerthPage from '../BerthPage/SelectedBerthPage';

import { Store } from '../../../redux/types';
import { SelectedServices } from '../../../types/services';
import { Berths } from '../../berths/types';

import { BOAT_TYPES_BERTHS_QUERY } from '../../../utils/graphql';
import BoatsBerthsQuery from '../../common/BoatsBerthsQuery';

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
    key: 'berths',
    completed: true,
    current: false,
    linkTo: `berths`
  },
  {
    key: 'selected_berths',
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
    await props.localePush('/form/registered_boat');
  };

  const handlePrevious = async () => {
    await props.localePush('/berths');
  };

  return (
    <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
      {({
        loading,
        // error, TODO: handle errors
        data
      }) => {
        const boatTypes = !loading && data ? data.boatTypes : [];
        return (
          <SelectedBerthPage
            handlePrevious={handlePrevious}
            moveToForm={moveToForm}
            boatTypes={boatTypes}
            steps={steps}
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
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices,
      values: state.forms.values
    }),
    {
      deselectBerth,
      moveUp,
      moveDown
    }
  )
)(UnconnectedSelectedBerthPage);
