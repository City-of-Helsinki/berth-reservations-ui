import get from 'lodash/get';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useQuery } from 'react-apollo';

import { submitApplicationForm as submitExchangeForm } from '../../../redux/actions/ApplicationActions';
import { deselectBerth, moveDown, moveUp } from '../../../redux/actions/BerthActions';
import { BoatTypesBerthsQuery } from '../../__generated__/BoatTypesBerthsQuery';
import { getResources, getSelectedResources } from '../../../common/utils/applicationUtils';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { getBerthFilterByValues } from '../utils';
import SelectedBerthPage from './SelectedBerthPage';
import { Store } from '../../../redux/types';
import { SelectedServices } from '../../../common/types/services';
import { SelectedIds } from '../../../common/types/resource';
import { BerthFormValues } from '../types';
import { BOAT_TYPES_BERTHS_QUERY } from '../../queries';
import { StepType } from '../../../common/steps/step/Step';

interface Props {
  selectedBerths: SelectedIds;
  selectedServices: SelectedServices;
  localePush: LocalePush;
  values: BerthFormValues;
  berthsApplicationType: string;
  initialValues: BerthFormValues;
  submitExchangeForm(values: BerthFormValues): void;
  deselectBerth(id: string): void;
  moveUp(id: string): void;
  moveDown(id: string): void;
}

const steps: StepType[] = [
  {
    completed: true,
    current: false,
    label: 'site.steps.berths',
    linkTo: `berths`,
  },
  {
    completed: false,
    current: true,
    label: 'site.steps.selected_berths',
    linkTo: '',
  },
  {
    completed: false,
    current: false,
    label: 'site.steps.boat_information',
    linkTo: '',
  },
  {
    completed: false,
    current: false,
    label: 'site.steps.applicant',
    linkTo: '',
  },
  {
    completed: false,
    current: false,
    label: 'site.steps.send_application',
    linkTo: '',
  },
];

const UnconnectedSelectedBerthPage = ({ localePush, values, selectedServices, selectedBerths, ...rest }: Props) => {
  const { data, loading } = useQuery<BoatTypesBerthsQuery>(BOAT_TYPES_BERTHS_QUERY);

  const moveToForm = async () => {
    await localePush('/berths/form/registered-boat');
  };
  const handlePrevious = async () => {
    await localePush('/berths');
  };

  const berths = getResources(data ? data.harbors : null);
  const selected = getSelectedResources(selectedBerths, berths);
  const boatTypes = !loading && data ? data.boatTypes : [];
  const type = get(values, 'boatType');
  const width = get(values, 'boatWidth', '');
  const length = get(values, 'boatLength', '');
  const boatType = boatTypes ? boatTypes.find((t) => !!t && t.id === type) : undefined;
  const boatTypeName = boatType && boatType.name;
  const filter = getBerthFilterByValues(values, selectedServices);
  const validSelection = selected.every(filter);

  return (
    <SelectedBerthPage
      boatInfo={{ width, length, boatType: boatTypeName }}
      handlePrevious={handlePrevious}
      moveToForm={moveToForm}
      filter={filter}
      validSelection={validSelection}
      steps={steps}
      legend={{
        title: 'legend.selected_berths.title',
        legend: 'legend.selected_berths.legend',
      }}
      selectedBerths={selected}
      values={values}
      berths={berths}
      {...rest}
    />
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices,
      values: state.forms.berthValues,
      berthsApplicationType: state.application.berthsApplicationType,
      initialValues: state.application.berthSwitch,
    }),
    {
      deselectBerth,
      moveUp,
      moveDown,
      submitExchangeForm,
    }
  )
)(UnconnectedSelectedBerthPage);
