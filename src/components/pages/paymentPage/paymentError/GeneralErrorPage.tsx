import React from 'react';
import { useTranslation } from 'react-i18next';

import NoticeTemplate from '../../../common/noticeTemplate/NoticeTemplate';

const GeneralErrorPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      className={'vene-payment-general-error-page'}
      titleText={t('page.payment_error.general_error.title')}
      message={<p>{t('page.payment_error.general_error.message')}</p>}
    />
  );
};

export default GeneralErrorPage;
