import classNames from 'classnames';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Icon, { IconNames } from '../../Icon';

import './property.scss';

export interface Props {
  iconName?: IconNames;
  available: boolean;
  value?: number | null;
  unit?: string;
  titleId: string;
}

const Property = ({ iconName, available, value, unit, titleId }: Props) => {
  return (
    <div
      className={classNames('vene-property', {
        'vene-property--not-available': !available
      })}
    >
      {value !== undefined && unit !== undefined && (
        <div className="vene-property__value">
          {value || '-'}
          {value && unit}
        </div>
      )}

      {value !== undefined && unit === undefined && (
        <div className="vene-property__value">{value || '-'}</div>
      )}

      {iconName && (
        <div className="vene-property__icon">
          <Icon name={iconName} />
        </div>
      )}

      {titleId && (
        <div className="vene-property__title">
          <FormattedMessage tagName="p" id={titleId} />
        </div>
      )}
    </div>
  );
};

export default injectIntl(Property);
