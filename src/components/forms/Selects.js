// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import { Select } from './Fields';

export type WithBoatType = {
  boatTypes: Object
};

export const BigBoatTypeValue = 'big_boat';
export const BoatType = injectIntl(
  ({ prefix, noValidate = false, intl: { formatMessage, locale }, boatTypes }) => (
    <Select
      noValidate={noValidate}
      name={`${prefix}.type`}
      label="form.registered.field.type.label"
      required
    >
      <option />
      {boatTypes &&
        boatTypes.map(type => (
          <option key={type.identifier} value={type.identifier}>
            {type.name[locale]}
          </option>
        ))}
    </Select>
  )
);

const propulsions = ['gasoline', 'diesel', 'fuel_oil', 'electricity', 'natural_gas', 'other'];
export const Propulsion = injectIntl(({ prefix, noValidate = false, intl: { formatMessage } }) => (
  <Select
    noValidate={noValidate}
    name={`${prefix}.propulsion`}
    label="form.big_ship.field.propulsion.label"
    required
  >
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

export const HullMaterial = injectIntl(
  ({ prefix, noValidate = false, intl: { formatMessage } }) => (
    <Select
      noValidate={noValidate}
      name={`${prefix}.hull_material`}
      label="form.big_ship.field.hull_material.label"
      required
    >
      <option />
      {hullMaterials.map(option => (
        <option key={option} value={option}>
          {formatMessage({ id: `form.big_ship.field.hull_material.${option}` })}
        </option>
      ))}
    </Select>
  )
);
