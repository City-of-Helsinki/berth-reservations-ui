import { useTranslation } from 'react-i18next';

const Accessibility = () => {
  const { t } = useTranslation();
  return <span>{t('form.accessibility.field.accessibility.label')}</span>;
};

export default Accessibility;
