import React from 'react';
import { useTranslation } from 'react-i18next';

import NoticeTemplate from '../../../common/noticeTemplate/NoticeTemplate';

const OrderCancelledPage = () => {
  const { t } = useTranslation();

  return (
    <NoticeTemplate titleText={t('page.order_cancelled.title_text')} message={t('page.order_cancelled.message')} />
  );
};

export default OrderCancelledPage;
