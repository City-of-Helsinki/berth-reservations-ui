import React from 'react';
import { useTranslation } from 'react-i18next';

import NoticeTemplate from '../../../common/noticeTemplate/NoticeTemplate';

const CustomerInformationErrorPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.payment_error.customer_information_error.title')}
      message={<p>{t('page.payment_error.customer_information_error.message')}</p>}
    />
  );
};

export default CustomerInformationErrorPage;
