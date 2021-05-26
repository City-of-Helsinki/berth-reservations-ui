import React from 'react';
import { RouteComponentProps } from 'react-router';

import { mockContactInfo, mockHasBerthNotifications } from './__fixtures__/mockData';
import ProfilePage from './ProfilePage';

export type ProfilePageContainerProps = RouteComponentProps<{ id: string }>;

const MockProfilePageContainer = ({ match }: ProfilePageContainerProps) => {
  const { id } = match.params;

  const contactInfo = mockContactInfo;
  const hasBerthNotifications = mockHasBerthNotifications(id);
  const hasWSNotifications = false;

  return (
    <ProfilePage
      contactInfo={contactInfo}
      hasBerthNotifications={hasBerthNotifications}
      hasWSNotifications={hasWSNotifications}
      showUnfinishedModules
    />
  );
};

export default MockProfilePageContainer;
