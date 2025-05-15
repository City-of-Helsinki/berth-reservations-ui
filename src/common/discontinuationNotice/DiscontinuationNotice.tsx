import { Notification } from 'hds-react';
import { Trans, useTranslation } from 'react-i18next';

const DiscontinuationNotice = () => {
  const { t } = useTranslation();
  return (
    <Notification type="alert" label={t('discontinuationNotice.label')}>
      <Trans
        t={t}
        i18nKey="discontinuationNotice.message"
        components={{
          // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
          Link: <a target="_blank" rel="noopener noreferrer" />,
        }}
      />
    </Notification>
  );
};

export default DiscontinuationNotice;
