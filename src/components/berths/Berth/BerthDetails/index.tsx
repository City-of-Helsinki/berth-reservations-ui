import classNames from 'classnames';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Icon, { IconNames } from '../../../common/Icon';

import './BerthDetails.scss';

interface Props {
  iconName?: IconNames;
  available: boolean;
  value?: number | null;
  unit?: string;
  titleId: string;
}

const BerthDetails = ({ iconName, available, value, unit, titleId }: Props) => {
  return (
    <div
      className={classNames('vene-berth__details', {
        'vene-berth__details-not-available': !available
      })}
    >
      {value !== undefined && unit !== undefined && <div className="vene-berth__details__value">{value || '-'}{value && unit}</div>}

      {value !== undefined && unit === undefined && <div className="vene-berth__details__value">{value || '-'}</div>}

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
