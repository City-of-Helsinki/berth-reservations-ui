import get from 'lodash/get';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { submitApplicationForm as submitExchangeForm } from '../../../redux/actions/ApplicationActions';
import { deselectBerth, moveDown, moveUp } from '../../../redux/actions/BerthActions';
import { getBerthFilterByValues, getBerths, getSelectedResources } from '../../../utils/berths';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { getHarbors } from '../../../utils/harborUtils';
import SelectedBerthPage from '../selectedBerthPage/SelectedBerthPage';

import { Store } from '../../../redux/types';
import { SelectedServices } from '../../../types/services';
import { SelectedIds } from '../../berths/types';

import { BOAT_TYPES_BERTHS_QUERY } from '../../../utils/graphql';
import BoatsBerthsQuery from '../../query/BoatsBerthsQuery';
import { StepType } from '../../steps/step/Step';

interface Props {
  selectedBerths: SelectedIds;
  selectedServices: SelectedServices;
  deselectBerth: Function;
  moveUp: Function;
  moveDown: Function;
  localePush: LocalePush;
  values: {};
  berthsApplicationType: string;
  submitExchangeForm: Function;
  initialValues: {};
}

const steps: StepType[] = [
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

const UnconnectedSelectedBerthPage = ({
  localePush,
  values,
  selectedServices,
  selectedBerths,
  ...rest
}: Props) => {
  const moveToForm = async () => {
    await localePush('/berths/form/registered-boat');
  };
  const handlePrevious = async () => {
    await localePush('/berths');
  };

  return (
    <BoatsBerthsQuery query={BOAT_TYPES_BERTHS_QUERY}>
      {({
        loading,
        // error, TODO: handle errors
        data
      }) => {
        const berths = getBerths(data ? data.harbors : null);
        const selected = getSelectedResources(selectedBerths, berths);
        const boatTypes = !loading && data ? data.boatTypes : [];
        const type = get(values, 'boatType');
        const width = get(values, 'boatWidth', '');
        const length = get(values, 'boatLength', '');
        const boatType = boatTypes ? boatTypes.find(t => !!t && t.id === type) : undefined;
        const boatTypeName = boatType && boatType.name;
        const filter = getBerthFilterByValues(values, selectedServices);
        const validSelection = selected.every(filter);
        // @ts-ignore
        const normalizedHarbors = getHarbors(data && data.harbors ? data.harbors.edges : []);

        return (
          <SelectedBerthPage
            boatInfo={{ width, length, boatType: boatTypeName }}
            handlePrevious={handlePrevious}
            moveToForm={moveToForm}
            filter={filter}
            validSelection={validSelection}
            steps={steps}
            initialValues={{}}
            legend={{
              title: 'legend.selected_berths.title',
              legend: 'legend.selected_berths.legend'
            }}
            selectedBerths={selected}
            values={values}
            harbors={normalizedHarbors}
            {...rest}
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
      selectedBerths: state.berths.selectedBerths,
      selectedServices: state.berths.selectedServices,
      values: state.forms.berthValues,
      berthsApplicationType: state.application.berthsApplicationType,
      initialValues: state.application.berthSwitch
    }),
    {
      deselectBerth,
      moveUp,
      moveDown,
      submitExchangeForm
    }
  )
)(UnconnectedSelectedBerthPage);
