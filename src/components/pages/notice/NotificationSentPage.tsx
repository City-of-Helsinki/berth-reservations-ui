import React from 'react';
import NoticeTemplate from './NoticeTemplate';
import resetStore from './resetStore';

const NotificationSentPage = () => (
  <NoticeTemplate
    titleKey="page.notification_sent.title"
    messageKey="page.notification_sent.message.paragraph1"
    secondMessageKey="page.notification_sent.message.paragraph2"
    backgroundColor="fog"
  />
);

export default resetStore(NotificationSentPage);
