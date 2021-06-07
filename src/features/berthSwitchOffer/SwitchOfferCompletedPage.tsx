import { useTranslation } from 'react-i18next';

import NoticeTemplate from '../../common/noticeTemplate/NoticeTemplate';

const SwitchOfferCompletedPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.profile.berths.switch_offer_completed.title')}
      message={
        <>
          <p>{t('page.profile.berths.switch_offer_completed.paragraph1')}</p>
          <p>{t('page.profile.berths.switch_offer_completed.paragraph2')}</p>
        </>
      }
      success
    />
  );
};

export default SwitchOfferCompletedPage;
