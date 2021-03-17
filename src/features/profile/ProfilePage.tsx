import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel, Tabs } from 'hds-react';

import Layout from '../../common/layout/Layout';
import ContactInfo, { ContactInfoProps } from './contactInfo/ContactInfo';
import CustomerBerths, { CustomerBerthsProps } from './customerBerths/CustomerBerths';

import './profilePage.scss';

export interface ProfilePageProps {
  customerContactInfo: ContactInfoProps;
  customerBerths: CustomerBerthsProps;
  hasBerthNotifications: boolean;
  hasWSNotifications: boolean;
}

const ProfilePage = ({
  customerContactInfo,
  customerBerths,
  hasBerthNotifications,
  hasWSNotifications,
}: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="vene-profile-page">
        <Container>
          <Tabs>
            <TabList className="vene-profile-page__tablist">
              <Tab className="vene-profile-page__tab">{t('page.profile.contact.title')}</Tab>
              <Tab className="vene-profile-page__tab">{t('page.profile.boats.title')}</Tab>
              <Tab
                className={classNames('vene-profile-page__tab', {
                  'vene-profile-page__tab--with-badge': hasBerthNotifications,
                })}
              >
                {t('page.profile.berths.title')}
              </Tab>
              <Tab
                className={classNames('vene-profile-page__tab', {
                  'vene-profile-page__tab--with-badge': hasWSNotifications,
                })}
              >
                {t('page.profile.winter_storage.title')}
              </Tab>
            </TabList>
            <TabPanel>
              <ContactInfo {...customerContactInfo} />
            </TabPanel>
            <TabPanel>Boats tab</TabPanel>
            <TabPanel>
              <CustomerBerths {...customerBerths} />
            </TabPanel>
            <TabPanel>Winter storage tab</TabPanel>
          </Tabs>
        </Container>
      </div>
    </Layout>
  );
};

export default ProfilePage;
