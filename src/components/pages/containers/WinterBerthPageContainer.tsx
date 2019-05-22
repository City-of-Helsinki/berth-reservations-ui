import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { onSubmit } from '../../../redux/actions/FormActions';
import {
  deselectService,
  deselectWinterArea,
  selectService,
  selectWinterArea
} from '../../../redux/actions/WinterAreaActions';
import { getBerths as getBerthsFromCache } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { WINTER_AREAS_QUERY } from '../../../utils/graphql';
import { IconNames } from '../../common/Icon';
import WinterAreasQuery from '../../query/WinterAreasQuery';
import BerthPage from '../BerthPage';

import { Store } from '../../../redux/types';
import { FormMode } from '../../../types/form';
import { SelectedServices } from '../../../types/services';
import { Berths as BerthsType } from '../../berths/types';

interface Props {
  berthLimit: number;
  initialValues: {};
  filtered: BerthsType;
  filteredNot: BerthsType;
  selectedBerths: BerthsType;
  selectedServices: SelectedServices;
  selectBerth: Function;
  deselectBerth: Function;
  selectService: Function;
  deselectService: Function;
  onSubmit: Function;
  localePush: LocalePush;
}

const BerthPageContainer = (props: Props) => {
  const steps = [
    {
      key: 'winter_areas',
      completed: false,
      current: true,
      linkTo: undefined
    },
    {
      key: 'review_areas',
      completed: false,
      current: false,
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

  const services: Array<{
    label: string;
    value:
      | 'electricity'
      | 'water'
      | 'gate'
      | 'numberOfMarkedPlaces'
      | 'repairArea'
      | 'summerStorageForDockingEquipment'
      | 'summerStorageForTrailers';
    icon: IconNames;
  }> = [
    {
      label: 'form.services.field.appointed_spaces.label',
      value: 'numberOfMarkedPlaces',
      icon: 'divided'
    },
    { label: 'form.services.field.water.label', value: 'water', icon: 'waterTap' },
    { label: 'form.services.field.gate.label', value: 'gate', icon: 'fence' },
    {
      label: 'form.services.field.electricity.label',
      value: 'electricity',
      icon: 'plug'
    },
    {
      label: 'form.services.field.storage_for_trailers.label',
      value: 'summerStorageForTrailers',
      icon: 'dollyEmpty'
    },
    {
      label: 'form.services.field.storage_for_docking_equip.label',
      value: 'summerStorageForDockingEquipment',
      icon: 'trestle'
    },
    {
      label: 'form.services.field.repair_area.label',
      value: 'repairArea',
      icon: 'tools'
    }
  ];

  return (
    <WinterAreasQuery query={WINTER_AREAS_QUERY}>
      {({
        // error, TODO: handle errors
        data
      }) => {
        const winterAreas = getBerthsFromCache(data ? data.winterStorageAreas : null);
        const boatTypes = data ? data.boatTypes : [];

        return (
          <BerthPage
            {...props}
            hero={FormMode.Winter}
            berths={winterAreas}
            boatTypes={boatTypes}
            steps={steps}
            services={services}
          />
        );
      }}
    </WinterAreasQuery>
  );
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      selectedBerths: state.winterAreas.selectedWinterAreas,
      selectedServices: state.winterAreas.selectedWinterServices,
      berthLimit: state.winterAreas.areasLimit
    }),
    {
      onSubmit,
      selectService,
      deselectService,
      selectBerth: selectWinterArea,
      deselectBerth: deselectWinterArea
    }
  )
)(BerthPageContainer);
