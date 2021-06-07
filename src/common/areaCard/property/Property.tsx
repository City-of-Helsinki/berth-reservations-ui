import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Icon, { IconNames } from '../../icon/Icon';

import './property.scss';

export interface Props {
  iconName?: IconNames;
  available: boolean;
  value?: number | null;
  unit?: string;
  titleId: string;
}

const Property = ({ iconName, available, value, unit, titleId }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames('vene-property', {
        'vene-property--not-available': !available,
      })}
    >
      {value !== undefined && unit !== undefined && (
        <div className="vene-property__value">
          {value || '-'}
          {value && unit}
        </div>
      )}

      {value !== undefined && unit === undefined && <div className="vene-property__value">{value || '-'}</div>}

      {iconName && (
        <div className="vene-property__icon">
          <Icon name={iconName} />
        </div>
      )}

      {titleId && (
        <div className="vene-property__title">
          <p>{t(titleId)}</p>
        </div>
      )}
    </div>
  );
};

export default Property;
