import React from 'react';
import { useTranslation } from 'react-i18next';

import NoticeTemplate, { NoticePageProps } from '../../../../common/noticeTemplate/NoticeTemplate';

export interface GeneralPaymentErrorPageProps {
  customMsg?: NoticePageProps['message'];
}

const GeneralPaymentErrorPage = ({ customMsg }: GeneralPaymentErrorPageProps) => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      id={'vene-payment-general-error-page'}
      titleText={t('page.payment_error.general_error.title')}
      message={customMsg ?? <p>{t('page.payment_error.general_error.message')}</p>}
    />
  );
};

export default GeneralPaymentErrorPage;
