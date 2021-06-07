import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import './labelValuePair.scss';

interface Props {
  label: string;
  value?: string | null;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
}

const LabelValuePair = ({ label, value = '-', className, labelClassName, valueClassName }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={classNames('vene-label-value-pair', className)}>
      <span className={classNames('vene-label-value-pair__label', labelClassName)}>{t(label)}:</span>
      <span className={classNames('vene-label-value-pair__value', valueClassName)}>{value}</span>
    </div>
  );
};

export default LabelValuePair;
