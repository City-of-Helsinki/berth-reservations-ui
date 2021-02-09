import React from 'react';

import ProfilePage from './ProfilePage';

const ProfilePageContainer = () => {
  const customerContactInfo = {
    name: 'Kalle',
    address: 'Kallenkau 6',
    postalCode: '00100',
    municipality: 'Helsinki',
    phoneNumber: '-',
    emailAddress: 'kalle@gmail.com',
    customerGroup: 'Yksityinen',
    language: 'Suomi',
  };

  return (
    <ProfilePage customerContactInfo={customerContactInfo} hasBerthNotifications={true} hasWSNotifications={false} />
  );
};

export default ProfilePageContainer;
