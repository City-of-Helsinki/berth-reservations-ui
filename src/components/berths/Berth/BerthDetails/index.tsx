import Icon from '@common/Icon';
import classNames from 'classnames';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './styles.scss';
import BerthDetailsProps from './types';

const BerthDetails = ({ iconName, available, value, titleId }: BerthDetailsProps) => {
  return (
    <div
      className={classNames('app-berth__details', {
        'app-berth__details-not-available': available
      })}
    >
      {value && <div className="app-berth__details__value">{value}</div>}

      {iconName && (
        <div className="app-berth__details__icon">
          <Icon name={iconName} />
        </div>
      )}

      {titleId && (
        <div className="app-berth__details__title">
          <FormattedMessage tagName="span" id={titleId} />
        </div>
      )}
    </div>
  );
};

export default injectIntl(BerthDetails);
