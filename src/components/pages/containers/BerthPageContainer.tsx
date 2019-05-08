import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  deselectBerth,
  deselectService,
  selectBerth,
  selectService
} from '../../../redux/actions/BerthActions';
import { onSubmit } from '../../../redux/actions/FormActions';
import { getBerths as getBerthsFromCache } from '../../../utils/berths';
import { withMatchParamsHandlers } from '../../../utils/container';
import { BOAT_TYPES_BERTHS_QUERY } from '../../../utils/graphql';
import BoatsBerthsQuery from '../../common/BoatsBerthsQuery';
import { IconNames } from '../../common/Icon';
import BerthPage from '../BerthPage';

import { Store } from '../../../redux/types';
import { SelectedServices } from '../../../types/services';
import { Berths as BerthsType } from '../../berths/types';

interface Props {
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
  localePush: Function;
}

const BerthPageContainer = (props: Props) => {
  const steps = [
    {
      key: 'berths',
      completed: false,
      current: true,
      linkTo: undefined
    },
    {
      key: 'selected_berths',
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
        const berths = getBerthsFromCache(data ? data.harbors : null);
        const boatTypes = data ? data.boatTypes : [];

        return (
          <BerthPage
            {...props}
            hero="berths"
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

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.values,
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices
    }),
    {
      onSubmit,
      selectBerth,
      deselectBerth,
      selectService,
      deselectService
    }
  )
)(BerthPageContainer);
