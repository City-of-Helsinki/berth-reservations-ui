import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconFaceSad } from 'hds-react';

const NoBerths = () => {
  const { t } = useTranslation();

  return (
    <div>
      <IconFaceSad size="m" aria-hidden="true" /> <strong>{t('page.profile.berths.noBerths')}</strong>
    </div>
  );
};

export default NoBerths;
