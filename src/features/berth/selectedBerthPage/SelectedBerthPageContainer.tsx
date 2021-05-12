import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useQuery } from 'react-apollo';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import { ApplicationOptions } from '../../../common/types/applicationType';
import { HarborPiersQuery, HarborPiersQueryVariables } from '../../__generated__/HarborPiersQuery';
import SelectedBerthPage from './SelectedBerthPage';
import { BERTH_SWITCH_REASONS_QUERY, HARBOR_PIERS_QUERY, HARBORS_QUERY } from '../../queries';
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
import { getBoatInfo, getHarborOptions, getPierOptions, getReasonOptions } from './utils';

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

  const [currentHarborId, setCurrentHarborId] = useState<string | null>(berthSwitchValues.harbor?.value ?? null);
  const { data: harborPiersData, loading: harborPiersLoading } = useQuery<HarborPiersQuery, HarborPiersQueryVariables>(
    HARBOR_PIERS_QUERY,
    {
      variables: {
        id: currentHarborId ?? '',
      },
      skip: !currentHarborId,
    }
  );

  const { data: berthSwitchReasonsData, loading: berthSwitchReasonsLoading } = useQuery<BerthSwitchReasonsQuery>(
    BERTH_SWITCH_REASONS_QUERY
  );

  const harbors = getHarbors(data);
  const selected = getSelectedResources(selectedHarbors, harbors);
  const filter = getBerthFilterByValues(berthValues, selectedServices);
  const validSelection = selected.every(filter);
  const boatInfo = getBoatInfo(data, berthValues);
  const harborOptions = getHarborOptions(data);
  const pierOptions = getPierOptions(harborPiersData);
  const reasonOptions = getReasonOptions(berthSwitchReasonsData);

  const handleSubmitApplication = async (values: BerthSwitchProps) => {
    submitBerthSwitch(values);
    await localePush('/berths/form/registered-boat');
  };

  const handlePrevious = async () => {
    await localePush('/berths');
  };

  const submitDisabled = (invalid: boolean, values: BerthSwitchProps) =>
    selectedHarbors.size === 0 ||
    invalid ||
    (applicationType === ApplicationOptions.SwitchApplication && !values.berth);

  if (loading || berthSwitchReasonsLoading) return <LoadingPage />;

  return (
    <Form
      onSubmit={handleSubmitApplication}
      initialValues={berthSwitchValues}
      render={({ handleSubmit, invalid, values, form: { change } }) => (
        <SelectedBerthPage
          applicationType={applicationType}
          boatInfo={boatInfo}
          deselectBerth={deselectBerth}
          submitDisabled={submitDisabled(invalid, values)}
          filter={filter}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
          harbors={harbors}
          moveDown={moveDown}
          moveUp={moveUp}
          selectedHarbors={selected}
          switchApplicationProps={{
            berthOptions: values.pier?.berths ?? [],
            harborOptions,
            pierOptions,
            pierOptionsLoading: harborPiersLoading,
            reasonOptions,
            changeSelectedHarbor: (harbor) => {
              change('harbor', harbor);
              setCurrentHarborId(harbor?.value ?? null);
              change('pier', null);
              change('berth', null);
            },
            changeSelectedPier: (pier) => {
              change('pier', pier);
              change('berth', null);
            },
          }}
          validSelection={validSelection}
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
