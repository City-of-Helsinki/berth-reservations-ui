import React, { useState } from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel, Tabs } from 'hds-react';

import Layout from '../../common/layout/Layout';
import ContactInfo, { ContactInfoProps } from './contactInfo/ContactInfo';

import './profilePage.scss';

export interface ProfilePageProps {
  customerContactInfo: ContactInfoProps;
  hasBerthNotifications: boolean;
  hasWSNotifications: boolean;
}

const ProfilePage = ({ customerContactInfo, hasBerthNotifications, hasWSNotifications }: ProfilePageProps) => {
  const { t } = useTranslation();
  const [isBerthTabClicked, setIsBerthTabClicked] = useState(false);
  const [isWSTabClicked, setIsWSTabClicked] = useState(false);

  return (
    <Layout>
      <div className="vene-profile-page">
        <Container>
          <Tabs>
            <TabList className="vene-profile-page__tablist">
              <Tab className="vene-profile-page__tab">{t('page.profile.contact.title')}</Tab>
              <Tab className="vene-profile-page__tab">{t('page.profile.boats.title')}</Tab>
              <Tab className={classNames('vene-profile-page__tab', 'vene-profile-page__tab--with-badge')}>
                <span
                  onMouseDown={() => setIsBerthTabClicked(true)}
                  className={classNames('vene-profile-page__label', {
                    'vene-profile-page__label--with-badge': hasBerthNotifications && !isBerthTabClicked,
                  })}
                >
                  {t('page.profile.berths.title')}
                </span>
              </Tab>
              <Tab className={classNames('vene-profile-page__tab', 'vene-profile-page__tab--with-badge')}>
                <span
                  onMouseDown={() => setIsWSTabClicked(true)}
                  className={classNames('vene-profile-page__label', {
                    'vene-profile-page__label--with-badge': hasWSNotifications && !isWSTabClicked,
                  })}
                >
                  {t('page.profile.winter_storage.title')}
                </span>
              </Tab>
            </TabList>
            <TabPanel>
              <ContactInfo {...customerContactInfo} />
            </TabPanel>
            <TabPanel>Boats tab</TabPanel>
            <TabPanel>Berths tab</TabPanel>
            <TabPanel>Winter storage tab</TabPanel>
          </Tabs>
        </Container>
      </div>
    </Layout>
  );
};

export default ProfilePage;
