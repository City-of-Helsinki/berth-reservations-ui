import React from 'react';
import { StepType } from '../../steps/step/Step';
import UnmarkedWinterStoragePage from './UnmarkedWinterStoragePage';

const UnmarkedWinterStoragePageContainer = () => {
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
  const winterStorageAreas = [
    {
      id: 'test',
      name: 'Test',
    },
  ];

  return (
    <UnmarkedWinterStoragePage
      steps={steps}
      winterStorageAreas={winterStorageAreas}
      initialValues={{ area: 'test' }}
      onSubmit={() => {
        return;
      }}
    />
  );
};

export default UnmarkedWinterStoragePageContainer;
