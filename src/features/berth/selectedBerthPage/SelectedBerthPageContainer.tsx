import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useQuery } from '@apollo/react-hooks';

import LoadingPage from '../../../common/loadingPage/LoadingPage';
import SelectionPageLayout from '../../../common/selectionPageLayout/SelectionPageLayout';
import { HARBORS_QUERY } from '../../queries';
import { BerthFormValues } from '../types';
import { HarborsQuery } from '../../__generated__/HarborsQuery';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { SelectedIds } from '../../../common/types/resource';
import { SelectedServices } from '../../../common/types/services';
import { Store } from '../../../redux/types';
import { deselectBerth, moveDown, moveUp } from '../../../redux/actions/BerthActions';
import { getBerthFilterByValues, getHarbors } from '../utils';
import { getSelectedResources } from '../../../common/utils/applicationUtils';
import { getBoatInfo } from './utils';
import authService from '../../../app/auth/authService';
import SelectedResourceContainer from '../../../common/areaCard/selectedResource/SelectedResourceContainer';
import { IconNames } from '../../../common/icon/Icon';
import { StepType } from '../../../common/steps/step/Step';

interface Props {
  berthValues: BerthFormValues;
  localePush: LocalePush;
  selectedHarbors: SelectedIds;
  selectedServices: SelectedServices;
  deselectBerth(id: string): void;
  moveDown(id: string): void;
  moveUp(id: string): void;
}

const steps: StepType[] = [
  {
    completed: true,
    current: false,
    label: 'site.steps.berths',
    linkTo: 'berths',
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

const SelectedBerthPageContainer = ({
  berthValues,
  localePush,
  selectedHarbors,
  selectedServices,
  deselectBerth,
  moveDown,
  moveUp,
}: Props) => {
  const { data, loading } = useQuery<HarborsQuery>(HARBORS_QUERY);

  const harbors = getHarbors(data);
  const selected = getSelectedResources(selectedHarbors, harbors);
  const filter = getBerthFilterByValues(berthValues, selectedServices);
  const validSelection = selected.every(filter);
  const boatInfo = getBoatInfo(data, berthValues);

  const isAuthenticated = authService.isAuthenticated();

  const handleSubmitApplication = () => localePush('/berths/form/registered-boat');

  const handlePrevious = () => localePush('/berths');

  const submitDisabled = (invalid: boolean) => selectedHarbors.size === 0 || invalid;

  if (loading) return <LoadingPage />;

  const selectionElements = selected.map((resource, index) => {
    const services: [IconNames, boolean][] = [
      ['plug', resource.electricity],
      ['waterTap', resource.water],
      ['trash', resource.wasteCollection],
      ['fence', resource.gate],
      ['streetLight', resource.lighting],
    ];

    return (
      <SelectedResourceContainer
        tContext="berth"
        title={`${index + 1}. ${resource.name}`}
        id={resource.id}
        key={resource.id}
        services={services}
        moveUp={index !== 0 ? moveUp : undefined}
        moveDown={index !== selectedHarbors.size - 1 ? moveDown : undefined}
        handleRemove={deselectBerth}
        availabilityLevel={resource.availabilityLevel}
        validationErrMsg={filter(resource) ? undefined : 'error.message.invalid_berth'}
      />
    );
  });

  return (
    <Form
      onSubmit={handleSubmitApplication}
      render={({ handleSubmit, invalid }) => (
        <SelectionPageLayout
          tContext="berth"
          steps={steps}
          boatInfo={boatInfo}
          legend={{
            title: 'legend.selected_berths.title',
            legend: 'legend.selected_berths.legend',
          }}
          selectionElements={selectionElements}
          handleSubmit={handleSubmit}
          submitDisabled={submitDisabled(invalid)}
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
      berthValues: state.forms.berthValues,
      selectedHarbors: state.berths.selectedHarbors,
      selectedServices: state.berths.selectedServices,
    }),
    {
      deselectBerth,
      moveUp,
      moveDown,
    }
  )
)(SelectedBerthPageContainer);
