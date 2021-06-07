import ProfilePage from './ProfilePage';

const ProfilePageContainer = () => {
  // TODO
  //   const hasBerthNotifications =
  //     customerBerths.invoice?.order.orderStatus === OrderStatus.OFFERED || !!customerBerths.offer;

  return (
    <ProfilePage
      contactInfo={{
        address: '',
        customerGroup: '',
        emailAddress: '',
        language: '',
        municipality: '',
        name: '',
        phoneNumber: '',
        postalCode: '',
      }}
    />
  );
};

export default ProfilePageContainer;
