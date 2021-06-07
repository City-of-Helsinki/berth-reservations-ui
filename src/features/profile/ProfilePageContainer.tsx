import { useQuery } from '@apollo/react-hooks';

import LoadingPage from '../../common/loadingPage/LoadingPage';
import { isProfileDebugEnabled } from '../../common/utils/featureFlags';
import { ProfilePageQuery } from '../__generated__/ProfilePageQuery';
import { PROFILE_PAGE_QUERY } from '../queries';
import { ProfileDebug } from './ProfileDebug';
import ProfilePage from './ProfilePage';
import { getContactInfo } from './utils';

const ProfilePageContainer = () => {
  const { data, loading, error } = useQuery<ProfilePageQuery>(PROFILE_PAGE_QUERY);

  if (loading) return <LoadingPage />;

  // TODO
  //   const hasBerthNotifications =
  //     customerBerths.invoice?.order.orderStatus === OrderStatus.OFFERED || !!customerBerths.offer;

  const contactInfo = getContactInfo(data);

  return (
    <>
      <ProfilePage contactInfo={contactInfo} />
      {isProfileDebugEnabled && <ProfileDebug error={error} />}
    </>
  );
};

export default ProfilePageContainer;
