import React from 'react';
import { useTranslation } from 'react-i18next';
import NoticeTemplate from '../../../../common/noticeTemplate/NoticeTemplate';

interface AlreadyPaidPageProps {
  isAdditionalProduct: boolean;
}

const AlreadyPaidPage = ({ isAdditionalProduct }: AlreadyPaidPageProps) => {
  const { t } = useTranslation();

  const message = isAdditionalProduct
    ? t('page.payment_error.already_paid.paid_message')
    : t('page.payment_error.already_paid.paid_and_signed_message');

  return (
    <NoticeTemplate
      id={'vene-already-paid-page'}
      titleText={t('page.payment_error.already_paid.title')}
      message={<p>{message}</p>}
    />
  );
};

export default AlreadyPaidPage;
