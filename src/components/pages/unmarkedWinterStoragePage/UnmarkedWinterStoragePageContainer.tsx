import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Store } from '../../../redux/types';
import { UnmarkedWinterFormValues } from '../../../types/unmarkedWinterStorage';
import { UnmarkedWinterAreasQuery } from '../../../utils/__generated__/UnmarkedWinterAreasQuery';
import { LocalePush, withMatchParamsHandlers } from '../../../utils/container';
import { UNMARKED_WINTER_AREAS_QUERY } from '../../../utils/graphql';
import { getWinterStorageAreas } from '../../../utils/unmarkedWinterStorage';
import { StepType } from '../../steps/step/Step';
import UnmarkedWinterStoragePage from './UnmarkedWinterStoragePage';
import { useQuery } from 'react-apollo';

interface WithLocalePush {
  localePush: LocalePush;
}

interface PropsFromState {
  initialValues: UnmarkedWinterFormValues;
}

type Props = WithLocalePush & PropsFromState;

const UnmarkedWinterStoragePageContainer = (props: Props) => {
  const steps: StepType[] = [
    {
      completed: false,
      current: true,
      key: 'unmarked_winter_storage_area',
      linkTo: '',
    },
    {
      completed: false,
      current: false,
      key: 'boat_information',
      linkTo: '',
    },
    {
      completed: false,
      current: false,
      key: 'owner',
      linkTo: '',
    },
    {
      completed: false,
      current: false,
      key: 'send_notification',
      linkTo: '',
    },
  ];

  const { loading, data } = useQuery<UnmarkedWinterAreasQuery>(UNMARKED_WINTER_AREAS_QUERY);
  if (loading) return null;

  const winterStorageAreas = getWinterStorageAreas(data ? data.winterStorageAreas : null);

  return (
    <UnmarkedWinterStoragePage
      {...props}
      steps={steps}
      winterStorageAreas={winterStorageAreas}
      onSubmit={() => {
        return; // TODO
      }}
    />
  );
};

export default compose<Props, {}>(
  withMatchParamsHandlers,
  connect((state: Store) => ({
    initialValues: state.forms.unmarkedWinterValues,
  }))
)(UnmarkedWinterStoragePageContainer);
