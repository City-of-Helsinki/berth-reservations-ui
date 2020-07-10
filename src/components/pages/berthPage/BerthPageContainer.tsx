import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import {
  deselectBerth,
  deselectService,
  selectBerth,
  selectService
} from '../../../redux/actions/BerthActions';
import { onSubmitBerthForm } from '../../../redux/actions/FormActions';
import { getResources } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { BOAT_TYPES_BERTHS_QUERY } from '../../../utils/graphql';
import { IconNames } from '../../common/Icon';
import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';
import BerthPage from './BerthPage';

import { Store } from '../../../redux/types';
import { BerthFormValues } from '../../../types/berth';
import { SelectedServices } from '../../../types/services';
import { Berths as BerthsType, SelectedIds } from '../../berths/types';
import { StepType } from '../../steps/step/Step';

interface Props {
  initialValues: BerthFormValues;
  filtered: BerthsType;
  filteredNot: BerthsType;
  selectedBerthsIds: SelectedIds;
  selectedServices: SelectedServices;
  selectBerth: Function;
  deselectBerth: Function;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  localePush: LocalePush;
  berthLimit: number;
}

const BerthPageContainer = (props: Props) => {
  const steps: StepType[] = [
    {
      key: 'berths',
      completed: false,
      current: true,
      linkTo: ''
    },
    {
      key: 'selected_berths',
      completed: false,
      current: false,
      linkTo: ''
    },
    {
      key: 'boat_information',
      completed: false,
      current: false,
      linkTo: ''
    },
    {
      key: 'applicant',
      completed: false,
      current: false,
      linkTo: ''
    },
    {
      key: 'send_application',
      completed: false,
      current: false,
      linkTo: ''
    }
  ];

  const services: Array<{
    label: string;
    value: 'electricity' | 'water' | 'wasteCollection' | 'gate' | 'lighting';
    icon: IconNames;
  }> = [
    {
      label: 'form.services.field.electricity.label',
      value: 'electricity',
      icon: 'plug'
    },
    { label: 'form.services.field.water.label', value: 'water', icon: 'waterTap' },
    {
      label: 'form.services.field.waste_collection.label',
      value: 'wasteCollection',
      icon: 'trash'
    },
    { label: 'form.services.field.gate.label', value: 'gate', icon: 'fence' },
    {
      label: 'form.services.field.lighting.label',
      value: 'lighting',
      icon: 'streetLight'
    }
  ];

  return (
    <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
      {({
        // error, TODO: handle errors
        data
      }) => {
        const berths = getResources(data ? data.harbors : null);
        const boatTypes = data ? data.boatTypes : [];

        return (
          <BerthPage
            {...props}
            berths={berths}
            boatTypes={boatTypes}
            steps={steps}
            services={services}
          />
        );
      }}
    </BoatsBerthsQuery>
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.berthValues,
      selectedBerthsIds: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices,
      berthLimit: state.berths.berthLimit
    }),
    {
      selectBerth,
      deselectBerth,
      selectService,
      deselectService,
      onSubmit: onSubmitBerthForm
    }
  )
)(BerthPageContainer);