import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Icon from '../../common/Icon';
import './_berth-details.scss';

function BerthDetails({ icon, available, value, titleId }) {
  return (
    <div
      className={classNames('app-berth__details', {
        'app-berth__details-not-available': available
      })}
    >
      {value && <div className="app-berth__details__value">{value}</div>}

      {icon && (
        <div className="app-berth__details__icon">
          <Icon name={icon} />
        </div>
      )}

      {titleId && (
        <div className="app-berth__details__title">
          <FormattedMessage tagName="span" id={titleId} />
        </div>
      )}
    </div>
  );
}

BerthDetails.propTypes = {
  icon: PropTypes.string,
  available: PropTypes.bool,
  value: PropTypes.string,
  titleId: PropTypes.string
};

export default injectIntl(BerthDetails);
