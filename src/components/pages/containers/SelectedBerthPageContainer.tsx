import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { submitApplicationForm as submitExchangeForm } from '../../../redux/actions/ApplicationActions';
import { deselectBerth, moveDown, moveUp } from '../../../redux/actions/BerthActions';
import { withMatchParamsHandlers } from '../../../utils/container';
import SelectedBerthPage from '../BerthPage/SelectedBerthPage/SelectedBerthPage';

import { Store } from '../../../redux/types';
import { SelectedServices } from '../../../types/services';
import { Berths } from '../../berths/types';

import { completeStep } from '../../../redux/actions/StepsActions';
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
  selectedApplicationType: string;
  submitExchangeForm: Function;
  initialValues: {};
  completeStep: Function;
}

const UnconnectedSelectedBerthPage = (props: Props) => {
  const moveToForm = async () => {
    props.completeStep('registered_boat');
    await props.localePush('/berths/form/registered_boat');
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
            data={data || null}
            legend={{
              title: 'legend.selected_berths.title',
              legend: 'legend.selected_berths.legend'
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
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices,
      values: state.forms.values,
      selectedApplicationType: state.application.selectedApplicationType,
      initialValues: state.application.berthSwitch
    }),
    {
      deselectBerth,
      moveUp,
      moveDown,
      submitExchangeForm,
      completeStep
    }
  )
)(UnconnectedSelectedBerthPage);
