import { useTranslation } from 'react-i18next';
import { LoadingSpinner } from 'hds-react';

import './spinner.scss';

export interface SpinnerProps {
  withText?: boolean;
  text?: string;
}

const Spinner = ({ withText, text }: SpinnerProps) => {
  const { t } = useTranslation();
  const loadingText = text ?? t('site.common.loading');

  return (
    <div className="vene-spinner">
      <LoadingSpinner loadingText={withText ? loadingText : undefined} />
    </div>
  );
};

export default Spinner;
