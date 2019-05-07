import classNames from 'classnames';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Icon from '../../../common/Icon';
import './BerthDetails.scss';
import BerthDetailsProps from './types';

const BerthDetails = ({ iconName, available, value, titleId }: BerthDetailsProps) => {
  return (
    <div
      className={classNames('vene-berth__details', {
        'vene-berth__details-not-available': !available
      })}
    >
      {value && <div className="vene-berth__details__value">{value}</div>}

      {iconName && (
        <div className="vene-berth__details__icon">
          <Icon name={iconName} />
        </div>
      )}

      {titleId && (
        <div className="vene-berth__details__title">
          <FormattedMessage tagName="p" id={titleId} />
        </div>
      )}
    </div>
  );
};

export default injectIntl(BerthDetails);
