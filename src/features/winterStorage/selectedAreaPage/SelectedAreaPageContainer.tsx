import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useQuery } from 'react-apollo';

import { deselectWinterArea, moveWinterAreaDown, moveWinterAreaUp } from '../../../redux/actions/WinterAreaActions';
import { WinterAreasQuery } from '../../__generated__/WinterAreasQuery';
import { getSelectedResources } from '../../../common/utils/applicationUtils';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { getWinterStorageAreas, getWinterStorageFilterByValues } from '../utils';
import SelectedAreaPage from './SelectedAreaPage';
import { WINTER_AREAS_QUERY } from '../../queries';
import { Store } from '../../../redux/types';
import { SelectedWinterServices } from '../../../common/types/services';
import { WinterFormValues } from '../types';
import { SelectedIds } from '../../../common/types/resource';
import { StepType } from '../../../common/steps/step/Step';

interface Props {
  selectedAreas: SelectedIds;
  selectedServices: SelectedWinterServices;
  localePush: LocalePush;
  values: WinterFormValues;
  deselectArea(id: string): void;
  moveUp(id: string): void;
  moveDown(id: string): void;
}

const steps: StepType[] = [
  {
    completed: true,
    current: false,
    label: 'site.steps.winter_areas',
    linkTo: `winter-storage`,
  },
  {
    completed: false,
    current: true,
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

const UnconnectedSelectedAreaPage = ({ localePush, values, selectedAreas, selectedServices, ...rest }: Props) => {
  const { data } = useQuery<WinterAreasQuery>(WINTER_AREAS_QUERY);

  const moveToForm = async () => {
    await localePush('/winter-storage/form/registered-boat');
  };
  const handlePrevious = async () => {
    await localePush('/winter-storage');
  };

  const width = values.boatWidth;
  const length = values.boatLength;
  const filter = getWinterStorageFilterByValues(values, selectedServices);
  const areas = getWinterStorageAreas(data);
  const selected = getSelectedResources(selectedAreas, areas);
  const validSelection = selected.every(filter);

  return (
    <SelectedAreaPage
      boatInfo={{ width, length }}
      handlePrevious={handlePrevious}
      moveToForm={moveToForm}
      filter={filter}
      validSelection={validSelection}
      steps={steps}
      legend={{
        title: 'legend.selected_areas.title',
        legend: 'legend.selected_areas.legend',
      }}
      selectedAreas={selected}
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
      values: state.forms.winterValues,
    }),
    {
      deselectArea: deselectWinterArea,
      moveUp: moveWinterAreaUp,
      moveDown: moveWinterAreaDown,
    }
  )
)(UnconnectedSelectedAreaPage);
