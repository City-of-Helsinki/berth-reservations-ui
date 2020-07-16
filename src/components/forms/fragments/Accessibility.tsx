import React from 'react';
import { useTranslation } from 'react-i18next';

const AccessibilityFragment = () => {
  const { t } = useTranslation();
  return <span>{t('form.accessibility.field.accessibility.label')}</span>;
};

export default AccessibilityFragment;
