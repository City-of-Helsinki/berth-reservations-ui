import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import { compose } from 'recompose';
import { useQuery } from '@apollo/react-hooks';

import { deselectWinterArea, moveWinterAreaDown, moveWinterAreaUp } from '../../../redux/actions/WinterAreaActions';
import { WinterAreasQuery } from '../../__generated__/WinterAreasQuery';
import { getSelectedResources } from '../../../common/utils/applicationUtils';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { getWinterStorageAreas, getWinterStorageFilterByValues } from '../utils';
import { WINTER_AREAS_QUERY } from '../../queries';
import { Store } from '../../../redux/types';
import { SelectedWinterServices } from '../../../common/types/services';
import { WinterFormValues } from '../types';
import { SelectedIds } from '../../../common/types/resource';
import { StepType } from '../../../common/steps/step/Step';
import authService from '../../../app/auth/authService';
import SelectionPageLayout from '../../../common/selectionPageLayout/SelectionPageLayout';
import SelectedResourceContainer from '../../../common/areaCard/selectedResource/SelectedResourceContainer';
import { IconNames } from '../../../common/icon/Icon';

interface Props {
  initialValues: WinterFormValues;
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

const UnconnectedSelectedAreaPage = ({
  localePush,
  values,
  selectedAreas,
  selectedServices,
  initialValues,
  moveUp,
  moveDown,
  deselectArea,
}: Props) => {
  const { data } = useQuery<WinterAreasQuery>(WINTER_AREAS_QUERY);

  const moveToForm = () => localePush('/winter-storage/form/registered-boat');
  const handlePrevious = () => localePush('/winter-storage');

  const isAuthenticated = authService.isAuthenticated();

  const width = values.boatWidth;
  const length = values.boatLength;
  const filter = getWinterStorageFilterByValues(values, selectedServices);
  const areas = getWinterStorageAreas(data);
  const selected = getSelectedResources(selectedAreas, areas);
  const validSelection = selected.every(filter);

  const selectionElements = selected.map((resource, index) => {
    const services: [IconNames, boolean][] = [
      ['waterTap', resource.water],
      ['fence', resource.gate],
      ['plug', resource.electricity],
      ['dollyEmpty', resource.summerStorageForTrailers],
      ['trestle', resource.summerStorageForDockingEquipment],
    ];

    return (
      <SelectedResourceContainer
        tContext="winter"
        title={`${index + 1}. ${resource.name}`}
        id={resource.id}
        key={resource.id}
        services={services}
        moveUp={index !== 0 ? moveUp : undefined}
        moveDown={index !== selectedAreas.size - 1 ? moveDown : undefined}
        handleRemove={deselectArea}
        availabilityLevel={resource.availabilityLevel}
        validationErrMsg={filter(resource) ? undefined : 'error.message.invalid_area'}
      />
    );
  });

  return (
    <Form
      onSubmit={moveToForm}
      initialValues={initialValues}
      render={({ handleSubmit, invalid }) => (
        <SelectionPageLayout
          tContext="winter"
          steps={steps}
          boatInfo={{ width, length }}
          legend={{
            title: 'legend.selected_areas.title',
            legend: 'legend.selected_areas.legend',
          }}
          selectionElements={selectionElements}
          handleSubmit={handleSubmit}
          submitDisabled={selectedAreas.size === 0 || invalid}
          handlePrevious={handlePrevious}
          validSelection={validSelection}
          isAuthenticated={isAuthenticated}
        />
      )}
    />
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.winterValues,
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
