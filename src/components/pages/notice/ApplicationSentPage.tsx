import React from 'react';
import NoticeTemplate from './NoticeTemplate';
import resetStore from './resetStore';

const ApplicationSentPage = () => (
  <NoticeTemplate
    titleKey="page.application_sent.title"
    messageKey="page.application_sent.message.paragraph1"
    secondMessageKey="page.application_sent.message.paragraph2"
    success
  />
);

export default resetStore(ApplicationSentPage);
