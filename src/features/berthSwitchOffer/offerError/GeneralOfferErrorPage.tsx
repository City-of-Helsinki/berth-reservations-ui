import { useTranslation } from 'react-i18next';

import NoticeTemplate, { NoticePageProps } from '../../../common/noticeTemplate/NoticeTemplate';

export interface GeneralOfferErrorPageProps {
  customMsg?: NoticePageProps['message'];
}

const GeneralOfferErrorPage = ({ customMsg }: GeneralOfferErrorPageProps) => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      id={'vene-offer-general-error-page'}
      titleText={t('page.offer_error.general_error.title')}
      message={customMsg ?? <p>{t('page.offer_error.general_error.message')}</p>}
    />
  );
};

export default GeneralOfferErrorPage;
