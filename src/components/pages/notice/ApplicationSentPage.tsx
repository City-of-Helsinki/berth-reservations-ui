import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import NoticeTemplate from '../../../common/noticeTemplate/NoticeTemplate';
import resetStore from './resetStore';

const ApplicationSentPage = () => {
  const { t } = useTranslation();
  return (
    <NoticeTemplate
      titleText={t('page.application_sent.title')}
      message={
        <>
          <p>{t('page.application_sent.message.paragraph1')}</p>
          <p>
            <Trans i18nKey={'page.application_sent.message.paragraph2'}>
              Hel... <br /> ven... <br /> Puh... <br /> Pal...
            </Trans>
          </p>
        </>
      }
      success
    />
  );
};

export default resetStore(ApplicationSentPage);
