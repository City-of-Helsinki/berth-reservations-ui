import React from 'react';
import { useTranslation } from 'react-i18next';

import './labelValuePair.scss';

interface Props {
  label: string;
  value?: string | null;
}

const LabelValuePair = ({ label, value = '-' }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="vene-label-value-pair">
      <span className="vene-label-value-pair__label">{t(label)}</span>
      <span className="vene-label-value-pair__label">:</span>
      <span className="vene-label-value-pair__value">{value}</span>
    </div>
  );
};

export default LabelValuePair;
