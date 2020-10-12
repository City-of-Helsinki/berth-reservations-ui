import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { onSubmitWinterForm } from '../../../redux/actions/FormActions';
import {
  deselectService,
  deselectWinterArea,
  selectService,
  selectWinterArea,
} from '../../../redux/actions/WinterAreaActions';
import { WinterAreasQuery } from '../../../utils/__generated__/WinterAreasQuery';
import { filterAreasWithMarkedPlaces, getResources } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { WINTER_AREAS_QUERY } from '../../../utils/graphql';
import { IconNames } from '../../../common/Icon';
import WinterStoragePage from './WinterStoragePage';

import { Store } from '../../../redux/types';
import { SelectedWinterServices } from '../../../types/services';
import { WinterFormValues } from '../../../types/winterStorage';
import { SelectedIds } from '../../berths/types';
import { StepType } from '../../steps/step/Step';
import { Query } from 'react-apollo';

interface WithLocalePush {
  localePush: LocalePush;
}

interface PropsFromState {
  initialValues: WinterFormValues;
  selectedAreasIds: SelectedIds;
  selectedServices: SelectedWinterServices;
  areasLimit: number;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  selectArea: Function;
  deselectArea: Function;
}

type Props = WithLocalePush & PropsFromState;

const WinterStoragePageContainer = (props: Props) => {
  const steps: StepType[] = [
    {
      completed: false,
      current: true,
      label: 'site.steps.winter_areas',
      linkTo: '',
    },
    {
      completed: false,
      current: false,
      label: 'site.steps.review_areas',
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

  const services: {
    label: string;
    value:
      | 'electricity'
      | 'water'
      | 'gate'
      | 'repairArea'
      | 'summerStorageForDockingEquipment'
      | 'summerStorageForTrailers';
    icon: IconNames;
  }[] = [
    { label: 'form.services.field.water.label', value: 'water', icon: 'waterTap' },
    { label: 'form.services.field.gate.label', value: 'gate', icon: 'fence' },
    {
      label: 'form.services.field.electricity.label',
      value: 'electricity',
      icon: 'plug',
    },
    {
      label: 'form.services.field.storage_for_trailers.label',
      value: 'summerStorageForTrailers',
      icon: 'dollyEmpty',
    },
    {
      label: 'form.services.field.storage_for_docking_equip.label',
      value: 'summerStorageForDockingEquipment',
      icon: 'trestle',
    },
    {
      label: 'form.services.field.repair_area.label',
      value: 'repairArea',
      icon: 'tools',
    },
  ];

  return (
    <Query<WinterAreasQuery> query={WINTER_AREAS_QUERY}>
      {({
        // error, TODO: handle errors
        data,
        loading,
      }) => {
        const winterAreas = getResources(data ? data.winterStorageAreas : null).filter(
          filterAreasWithMarkedPlaces
        );

        return (
          <WinterStoragePage
            {...props}
            areas={winterAreas}
            steps={steps}
            services={services}
            loading={loading}
          />
        );
      }}
    </Query>
  );
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.winterValues,
      selectedAreasIds: state.winterAreas.selectedWinterAreas,
      selectedServices: state.winterAreas.selectedWinterServices,
      areasLimit: state.winterAreas.areasLimit,
    }),
    {
      selectService,
      deselectService,
      onSubmit: onSubmitWinterForm,
      selectArea: selectWinterArea,
      deselectArea: deselectWinterArea,
    }
  )
)(WinterStoragePageContainer);
