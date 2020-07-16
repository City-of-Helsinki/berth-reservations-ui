import React from 'react';
import NoticeTemplate from './NoticeTemplate';
import resetStore from './resetStore';

const PaymentReceivedPage = () => (
  <NoticeTemplate
    titleKey="page.payment_received.title"
    messageKey="page.payment_received.message.paragraph1"
    secondMessageKey="page.payment_received.message.paragraph2"
    success
  />
);

export default resetStore(PaymentReceivedPage);
