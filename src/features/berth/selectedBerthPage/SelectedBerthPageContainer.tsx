import React from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useQuery } from 'react-apollo';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import SelectedBerthPage from './SelectedBerthPage';
import { BERTH_SWITCH_REASONS_QUERY, HARBORS_QUERY } from '../../queries';
import { BerthFormValues } from '../types';
import { BerthSwitchReasonsQuery } from '../../__generated__/BerthSwitchReasonsQuery';
import { HarborsQuery } from '../../__generated__/HarborsQuery';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { SelectedIds } from '../../../common/types/resource';
import { SelectedServices } from '../../../common/types/services';
import { BerthSwitchProps, Store } from '../../../redux/types';
import { deselectBerth, moveDown, moveUp } from '../../../redux/actions/BerthActions';
import { getBerthFilterByValues, getHarbors } from '../utils';
import { getSelectedResources } from '../../../common/utils/applicationUtils';
import { submitBerthSwitch } from '../../../redux/actions/BerthSwitchActions';
import { getBoatInfo, getHarborOptions, getReasonOptions } from './utils';

interface Props {
  applicationType: string;
  berthValues: BerthFormValues;
  berthSwitchValues: BerthSwitchProps;
  localePush: LocalePush;
  selectedHarbors: SelectedIds;
  selectedServices: SelectedServices;
  deselectBerth(id: string): void;
  moveDown(id: string): void;
  moveUp(id: string): void;
  submitBerthSwitch(values: BerthSwitchProps): void;
}

const SelectedBerthPageContainer = ({
  applicationType,
  berthValues,
  berthSwitchValues,
  localePush,
  selectedHarbors,
  selectedServices,
  deselectBerth,
  moveDown,
  moveUp,
  submitBerthSwitch,
}: Props) => {
  const { data, loading } = useQuery<HarborsQuery>(HARBORS_QUERY);
  const { data: berthSwitchReasonsData, loading: berthSwitchReasonsLoading } = useQuery<BerthSwitchReasonsQuery>(
    BERTH_SWITCH_REASONS_QUERY
  );

  const harbors = getHarbors(data);
  const selected = getSelectedResources(selectedHarbors, harbors);
  const filter = getBerthFilterByValues(berthValues, selectedServices);
  const validSelection = selected.every(filter);
  const boatInfo = getBoatInfo(data, berthValues);
  const harborOptions = getHarborOptions(data);
  const reasonOptions = getReasonOptions(berthSwitchReasonsData);

  const handleSubmitApplication = async (values: BerthSwitchProps) => {
    submitBerthSwitch(values);
    await localePush('/berths/form/registered-boat');
  };

  const handlePrevious = async () => {
    await localePush('/berths');
  };

  if (loading || berthSwitchReasonsLoading) return <LoadingPage />;

  return (
    <Form
      onSubmit={handleSubmitApplication}
      initialValues={berthSwitchValues}
      render={({ handleSubmit, invalid, values, form: { change } }) => (
        <SelectedBerthPage
          applicationType={applicationType}
          reasonOptions={reasonOptions}
          boatInfo={boatInfo}
          change={change}
          deselectBerth={deselectBerth}
          filter={filter}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
          harbors={harbors}
          harborOptions={harborOptions}
          invalid={invalid}
          moveDown={moveDown}
          moveUp={moveUp}
          selectedHarbors={selected}
          validSelection={validSelection}
          values={values}
        />
      )}
    />
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      applicationType: state.berths.applicationType,
      berthSwitchValues: state.berthSwitch.toObject(),
      berthValues: state.forms.berthValues,
      selectedHarbors: state.berths.selectedHarbors,
      selectedServices: state.berths.selectedServices,
    }),
    {
      deselectBerth,
      moveUp,
      moveDown,
      submitBerthSwitch,
    }
  )
)(SelectedBerthPageContainer);
