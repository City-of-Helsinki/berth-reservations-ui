import React from 'react';
import { useTranslation } from 'react-i18next';
import NoticeTemplate from '../../../common/noticeTemplate/NoticeTemplate';

const PaymentFailedPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.payment_failed.title')}
      message={
        <>
          <p>{t('page.payment_failed.message')}</p>
        </>
      }
    />
  );
};

export { PaymentFailedPage };
