import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import Layout from '../../common/layout/Layout';
import BerthsContainer from './berths/BerthsContainer';
import BoatsContainer from './boats/BoatsContainer';
import ContactInfoContainer from './contactInfo/ContactInfoContainer';
import { ContactInfo as ContactInfoType } from './types';
import WinterStorageContainer from './winterStorage/WinterStorageContainer';
import Tabs from '../../common/tabs/Tabs';
import { TabModule } from '../../common/tabs/types';
import './profilePage.scss';

export interface ProfilePageProps {
  contactInfo?: ContactInfoType;
  hasBerthNotifications?: boolean;
  hasWSNotifications?: boolean;
  showUnfinishedModules?: boolean;
  refetch(): void;
}

const ProfilePage = ({
  contactInfo,
  hasBerthNotifications,
  hasWSNotifications,
  showUnfinishedModules,
  refetch,
}: ProfilePageProps) => {
  const { t } = useTranslation();

  const contactTab: TabModule = {
    component: <ContactInfoContainer refetch={refetch} contactInfo={contactInfo} />,
    id: 'contact',
    title: t('page.profile.contact.title'),
  };

  const boatsTab: TabModule = {
    component: <BoatsContainer />,
    id: 'boats',
    title: t('page.profile.boats.title'),
  };

  const berthsTab: TabModule = {
    component: <BerthsContainer />,
    id: 'berths',
    showBadge: hasBerthNotifications,
    title: t('page.profile.berths.title'),
  };

  const winterStorageTab: TabModule = {
    component: <WinterStorageContainer />,
    id: 'winterStorage',
    showBadge: hasWSNotifications,
    title: t('page.profile.winter_storage.title'),
  };

  const modules = showUnfinishedModules ? [contactTab, boatsTab, berthsTab, winterStorageTab] : [contactTab, berthsTab];

  return (
    <Layout>
      <div className="vene-profile-page">
        <Container>
          <Tabs tabModules={modules} />
        </Container>
      </div>
    </Layout>
  );
};

export default ProfilePage;
