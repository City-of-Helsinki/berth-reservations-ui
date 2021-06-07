import { useTranslation } from 'react-i18next';

import NoticeTemplate from '../../common/noticeTemplate/NoticeTemplate';
import resetStore from './resetStore';

const NoticeSentPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.notice_sent.title')}
      message={
        <>
          <p>{t('page.notice_sent.message.paragraph1')}</p>
          <p>{t('page.notice_sent.message.paragraph2')}</p>
        </>
      }
      success
    />
  );
};

export default resetStore(NoticeSentPage);
