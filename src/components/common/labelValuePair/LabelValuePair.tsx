import React from 'react';
import { FormattedMessage } from 'react-intl';

import './labelValuePair.scss';

interface Props {
  label: string;
  value?: string | null;
}

const LabelValuePair = ({ label, value = '-' }: Props) => (
  <div className="vene-label-value-pair">
    <FormattedMessage id={label}>
      {lbl => <span className="vene-label-value-pair__label">{lbl}</span>}
    </FormattedMessage>
    <span className="vene-label-value-pair__label">:</span>
    <span className="vene-label-value-pair__value">{value}</span>
  </div>
);

export default LabelValuePair;
