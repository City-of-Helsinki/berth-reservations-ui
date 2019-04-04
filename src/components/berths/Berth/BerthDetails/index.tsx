import classNames from 'classnames';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Icon from '../../../common/Icon';
import BerthDetailsProps from './types';

const BerthDetails = ({ iconName, available, value, titleId }: BerthDetailsProps) => {
  return (
    <div
      className={classNames('app-Berth__details', {
        'app-Berth__details-not-available': available
      })}
    >
      {value && <div className="app-Berth__details__value">{value}</div>}

      {iconName && (
        <div className="app-Berth__details__icon">
          <Icon name={iconName} />
        </div>
      )}

      {titleId && (
        <div className="app-Berth__details__title">
          <FormattedMessage tagName="span" id={titleId} />
        </div>
      )}
    </div>
  );
};

export default injectIntl(BerthDetails);
