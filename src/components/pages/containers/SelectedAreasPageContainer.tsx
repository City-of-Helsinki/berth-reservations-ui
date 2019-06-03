import get from 'lodash/get';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import {
  deselectWinterArea,
  moveWinterAreaDown,
  moveWinterAreaUp
} from '../../../redux/actions/WinterAreaActions';
import { getBerthFilterByValues } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import SelectedBerthPage from '../selectedBerthPage/SelectedBerthPage';

import { Store } from '../../../redux/types';
import { SelectedServices } from '../../../types/services';
import { Berths } from '../../berths/types';

interface Props {
  selectedAreas: Berths;
  selectedServices: SelectedServices;
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  localePush: LocalePush;
  values: {};
}

const steps = [
  {
    key: 'winter_areas',
    completed: true,
    current: false,
    linkTo: `winter-storage`
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

const UnconnectedSelectedBerthPage = ({
  localePush,
  values,
  selectedAreas,
  selectedServices,
  ...rest
}: Props) => {
  const moveToForm = async () => {
    await localePush('/winter-storage/form/registered-boat');
  };
  const handlePrevious = async () => {
    await localePush('/winter-storage');
  };
  const width = get(values, 'boatWidth');
  const length = get(values, 'boatLength');
  const filter = getBerthFilterByValues(values, selectedServices);
  const validSelection = selectedAreas.every(filter);

  return (
    <SelectedBerthPage
      boatInfo={{ width, length }}
      handlePrevious={handlePrevious}
      moveToForm={moveToForm}
      filter={filter}
      validSelection={validSelection}
      steps={steps}
      initialValues={{}}
      legend={{
        title: 'legend.selected_areas.title',
        legend: 'legend.selected_areas.legend'
      }}
      selectedBerths={selectedAreas}
      values={values}
      {...rest}
    />
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      selectedAreas: state.winterAreas.selectedWinterAreas,
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
