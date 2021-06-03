import classNames from 'classnames';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import Properties from '../properties/Properties';

import './placeInfo.scss';

export interface Area {
  address: string;
  image: string;
  map: string;
  mapLabel: string;
  name: string;
  website: string;
  websiteLabel: string;
}

export interface PlaceSpec {
  label: string;
  value: string;
  bold?: boolean;
}

export interface PlaceInfoProps<T extends Record<string, boolean>> {
  className?: string;
  properties: T;
  area: Area;
  specs: PlaceSpec[];
}

const PlaceInfo = <T extends Record<string, boolean>>({
  className,
  properties,
  area: { address, image, map, mapLabel, name, website, websiteLabel },
  specs,
}: PlaceInfoProps<T>) => {
  return (
    <div className={classNames('vene-place-info', className)}>
      <div className="vene-place-info__main">
        <a href={image}>
          <img className="vene-place-info__image" src={image} alt={name} />
        </a>
        <div>
          <h2 className="vene-place-info__area-name">{name}</h2>
          <p>{address}</p>
          <p>
            <a href={website} className="vene-place-info__link" rel="noopener noreferrer" target="_blank">
              {websiteLabel}
            </a>
            <a href={map} className="vene-place-info__link" rel="noopener noreferrer" target="_blank">
              {mapLabel}
            </a>
          </p>
        </div>
      </div>

      <Properties {...properties} />

      {specs.map((spec, i) => (
        <LabelValuePair
          key={i}
          labelClassName={spec.bold ? 'vene-place-info__bold-field' : 'vene-place-info__normal-label'}
          label={spec.label}
          valueClassName={classNames({ 'vene-place-info__bold-field': spec.bold })}
          value={spec.value}
        />
      ))}
    </div>
  );
};

export default PlaceInfo;
