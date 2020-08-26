import React from 'react';
import { useTranslation } from 'react-i18next';
import NoticeTemplate from '../../common/noticeTemplate/NoticeTemplate';
import resetStore from './resetStore';

const NotificationSentPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.notification_sent.title')}
      message={
        <>
          <p>{t('page.notification_sent.message.paragraph1')}</p>
          <p>{t('page.notification_sent.message.paragraph2')}</p>
        </>
      }
      success
    />
  );
};

export default resetStore(NotificationSentPage);
