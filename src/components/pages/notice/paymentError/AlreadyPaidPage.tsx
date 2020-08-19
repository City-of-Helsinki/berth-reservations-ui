import React from 'react';
import { useTranslation } from 'react-i18next';
import NoticeTemplate from '../../../common/noticeTemplate/NoticeTemplate';

const AlreadyPaidPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.payment_error.already_paid.title')}
      message={<p>{t('page.payment_error.already_paid.message')}</p>}
    />
  );
};

export default AlreadyPaidPage;
