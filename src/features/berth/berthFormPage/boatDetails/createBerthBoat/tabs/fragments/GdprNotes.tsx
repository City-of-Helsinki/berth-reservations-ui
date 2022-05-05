import React from 'react';
import { useTranslation } from 'react-i18next';

import ExternalLink from '../../../../../../../common/externalLink/ExternalLink';
import styles from './gdprNotes.module.scss';

const GdprNotes = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <a href={t('site.footer.url.terms_of_service')} rel="noopener noreferrer" target="_blank">
        {t('form.gdpr.berthPrivacyStatementLink.text')}
      </a>

      <ExternalLink href={t('form.gdpr.openCityProfilePrivacyStatementLink.url')}>
        {t('form.gdpr.openCityProfilePrivacyStatementLink.text')}
      </ExternalLink>

      <ExternalLink href={t('form.gdpr.cityOfHelsinkiPrivacyStatementLink.url')}>
        {t('form.gdpr.cityOfHelsinkiPrivacyStatementLink.text')}
      </ExternalLink>
    </div>
  );
};

export default GdprNotes;
