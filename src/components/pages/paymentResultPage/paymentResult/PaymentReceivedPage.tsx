import React from 'react';
import { useTranslation } from 'react-i18next';
import NoticeTemplate from '../../../common/noticeTemplate/NoticeTemplate';
import resetStore from '../../notice/resetStore';

const PaymentReceivedPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.payment_received.title')}
      message={
        <>
          <p>{t('page.payment_received.message.paragraph1')}</p>
          <p>{t('page.payment_received.message.paragraph2')}</p>
        </>
      }
      success
    />
  );
};

export default resetStore(PaymentReceivedPage);
