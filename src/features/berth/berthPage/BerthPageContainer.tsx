import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useQuery } from '@apollo/react-hooks';

import { deselectBerth, deselectService, selectBerth, selectService } from '../../../redux/actions/BerthActions';
import { onSubmitBerthForm } from '../../../redux/actions/FormActions';
import { HarborsQuery } from '../../__generated__/HarborsQuery';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { HARBORS_QUERY } from '../../queries';
import { IconNames } from '../../../common/icon/Icon';
import { getHarbors } from '../utils';
import BerthPage from './BerthPage';
import { Store } from '../../../redux/types';
import { BerthFormValues, Harbors as HarborsType } from '../types';
import { SelectedServices } from '../../../common/types/services';
import { SelectedIds } from '../../../common/types/resource';
import { StepType } from '../../../common/steps/step/Step';

interface Props {
  initialValues: BerthFormValues;
  filtered: HarborsType;
  filteredNot: HarborsType;
  selectedHarborsIds: SelectedIds;
  selectedServices: SelectedServices;
  selectBerth: (berthId: string) => void;
  deselectBerth: (berthId: string) => void;
  selectService: (type: string) => string;
  deselectService: (type: string) => string;
  onSubmit: (values: BerthFormValues) => void;
  localePush: LocalePush;
  berthLimit: number;
}

const BerthPageContainer = (props: Props) => {
  const steps: StepType[] = [
    {
      completed: false,
      current: true,
      label: 'site.steps.berths',
      linkTo: '',
    },
    {
      completed: false,
      current: false,
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

  const services: {
    label: string;
    value: 'electricity' | 'water' | 'wasteCollection' | 'gate' | 'lighting';
    icon: IconNames;
  }[] = [
    {
      label: 'form.services.field.electricity.label',
      value: 'electricity',
      icon: 'plug',
    },
    { label: 'form.services.field.water.label', value: 'water', icon: 'waterTap' },
    {
      label: 'form.services.field.waste_collection.label',
      value: 'wasteCollection',
      icon: 'trash',
    },
    { label: 'form.services.field.gate.label', value: 'gate', icon: 'fence' },
    {
      label: 'form.services.field.lighting.label',
      value: 'lighting',
      icon: 'streetLight',
    },
  ];

  const { data, loading } = useQuery<HarborsQuery>(HARBORS_QUERY);
  const harbors = getHarbors(data);
  const boatTypes = data ? data.boatTypes : [];

  return (
    <BerthPage {...props} harbors={harbors} boatTypes={boatTypes} steps={steps} services={services} loading={loading} />
  );
};

export default compose<Props, Props>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.berthValues,
      selectedHarborsIds: state.berths.selectedHarbors,
      selectedServices: state.berths.selectedServices,
      berthLimit: state.berths.berthLimit,
    }),
    {
      selectBerth,
      deselectBerth,
      selectService,
      deselectService,
      onSubmit: onSubmitBerthForm,
    }
  )
)(BerthPageContainer);
