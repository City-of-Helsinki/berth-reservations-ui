import classNames from 'classnames';
import * as React from 'react';

import Icon from '../../../../common/icon/Icon';
import './infoSection.scss';

export interface InfoSectionProps {
  className?: string;
  children: React.ReactNode;
}

const InfoSection = ({ className, children }: InfoSectionProps) => {
  return (
    <div className={classNames('vene-info-section', className)}>
      <Icon name="exclamationCircle" className="vene-info-section__icon" />
      <p className="vene-info-section__text">{children}</p>
    </div>
  );
};

export default InfoSection;
