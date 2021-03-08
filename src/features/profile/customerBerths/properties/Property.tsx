import React from 'react';
import { useTranslation } from 'react-i18next';

import Icon, { IconProps } from '../../../../common/icon/Icon';
import './property.scss';

export interface PropertyProps {
  icon: IconProps['name'];
  labelKey: string;
}

const Property = ({ icon, labelKey }: PropertyProps) => {
  const { t } = useTranslation();
  return (
    <div className="vene-property">
      <Icon name={icon} className="vene-property__icon" />
      <p className="vene-property__label">{t(labelKey)}</p>
    </div>
  );
};

export default Property;