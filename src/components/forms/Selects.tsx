import React from 'react';
import { injectIntl } from 'react-intl';
import { Select } from './Fields';

import { BoatTypes } from '../../types/boatTypes';

export interface WithBoatType {
  boatTypes: BoatTypes;
}

export const BigBoatTypeValue = '8';

type BoatTypeProps = {
  className?: string;
  required: boolean;
} & WithBoatType;

export const BoatType = ({ boatTypes, required, className }: BoatTypeProps) => (
  <Select
    className={className}
    name={`boatType`}
    label="form.registered.field.type.label"
    required={required}
  >
    <option />
    {boatTypes &&
      boatTypes.reduce<JSX.Element[]>((acc, type) => {
        if (!type) return acc;
        return [
          <option key={type.id} value={type.id}>
            {type.name}
          </option>,
          ...acc
        ];
      }, [])}
  </Select>
);

const propulsions = ['gasoline', 'diesel', 'fuel_oil', 'electricity', 'natural_gas', 'other'];
export const Propulsion = injectIntl(({ intl: { formatMessage } }) => (
  <Select name={`boatPropulsion`} label="form.big_ship.field.propulsion.label" required>
    <option />
    {propulsions.map(option => (
      <option key={option} value={option}>
        {formatMessage({ id: `form.big_ship.field.propulsion.${option}` })}
      </option>
    ))}
  </Select>
));

const hullMaterials = [
  'aluminium',
  'concrete',
  'thermoplastic',
  'rubber',
  'fibreglass',
  'wood',
  'steel',
  'other'
];

export const HullMaterial = injectIntl(({ intl: { formatMessage } }) => (
  <Select name={`boatHullMaterial`} label="form.big_ship.field.hull_material.label" required>
    <option />
    {hullMaterials.map(option => (
      <option key={option} value={option}>
        {formatMessage({ id: `form.big_ship.field.hull_material.${option}` })}
      </option>
    ))}
  </Select>
));
