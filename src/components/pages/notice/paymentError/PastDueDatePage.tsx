import React from 'react';
import { useTranslation } from 'react-i18next';

import NoticeTemplate from '../NoticeTemplate';

const PastDueDatePage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.payment_error.past_due_date.title')}
      message={<p>{t('page.payment_error.past_due_date.message')}</p>}
    />
  );
};

export default PastDueDatePage;
