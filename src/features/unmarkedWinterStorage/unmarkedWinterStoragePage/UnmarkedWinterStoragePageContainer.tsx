import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useQuery } from '@apollo/react-hooks';

import { onSubmitUnmarkedWinterForm } from '../../../redux/actions/FormActions';
import { Store } from '../../../redux/types';
import { UnmarkedWinterFormValues } from '../types';
import { UnmarkedWinterAreasQuery } from '../../__generated__/UnmarkedWinterAreasQuery';
import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import { UNMARKED_WINTER_AREAS_QUERY } from '../../queries';
import { getWinterStorageAreas } from '../utils';
import { StepType } from '../../../common/steps/step/Step';
import UnmarkedWinterStoragePage from './UnmarkedWinterStoragePage';

interface WithLocalePush {
  localePush: LocalePush;
}

interface PropsFromState {
  initialValues: UnmarkedWinterFormValues;
  onSubmit: (values: UnmarkedWinterFormValues) => void;
}

type Props = WithLocalePush & PropsFromState;

const UnmarkedWinterStoragePageContainer = ({ localePush, onSubmit, initialValues }: Props) => {
  const steps: StepType[] = [
    {
      completed: false,
      current: true,
      label: 'site.steps.unmarked_winter_storage_area',
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
      label: 'site.steps.owner',
      linkTo: '',
    },
    {
      completed: false,
      current: false,
      label: 'site.steps.send_application',
      linkTo: '',
    },
  ];

  const { loading, data } = useQuery<UnmarkedWinterAreasQuery>(UNMARKED_WINTER_AREAS_QUERY);
  if (loading) return null;

  const winterStorageAreas = getWinterStorageAreas(data ? data.winterStorageAreas : null);

  return (
    <UnmarkedWinterStoragePage
      localePush={localePush}
      onSubmit={onSubmit}
      initialValues={initialValues}
      steps={steps}
      winterStorageAreas={winterStorageAreas}
    />
  );
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect(
    (state: Store) => ({
      initialValues: state.forms.unmarkedWinterValues,
    }),
    { onSubmit: onSubmitUnmarkedWinterForm }
  )
)(UnmarkedWinterStoragePageContainer);
