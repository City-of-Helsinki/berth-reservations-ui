import React from 'react';

import Icon from '../../../../common/icon/Icon';
import './infoSection.scss';

export interface InfoSectionProps {
  children: React.ReactNode;
}

const InfoSection = ({ children }: InfoSectionProps) => {
  return (
    <div className="vene-info-section">
      <Icon name="exclamationCircle" className="vene-info-section__icon" />
      <p className="vene-info-section__text">{children}</p>
    </div>
  );
};

export default InfoSection;
