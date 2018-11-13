// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import { Select } from './Fields';

export const BigBoatTypeValue = 'big_boat';
export const BoatType = injectIntl(
  ({ prefix, noValidate = false, intl: { formatMessage, locale }, boatTypes }) => (
    <Select
      noValidate={noValidate}
      name={`${prefix}.type`}
      label="form.registered.field.type.label"
      required
    >
      <option>{formatMessage({ id: 'form.registered.field.type.placeholder' })}</option>
      {boatTypes &&
        boatTypes.results.map(type => (
          <option key={type.identifier} value={type.identifier}>
            {type.name[locale]}
          </option>
        ))}
    </Select>
  )
);

export const Propulsion = injectIntl(({ prefix, noValidate = false, intl: { formatMessage } }) => (
  <Select
    noValidate={noValidate}
    name={`${prefix}.propulsion`}
    label="form.big_ship.field.propulsion.label"
    required
  >
    <option>{formatMessage({ id: 'form.big_ship.field.propulsion.placeholder' })}</option>
    <option>a</option>
    <option>b</option>
    <option>c</option>
  </Select>
));

export const HullMaterial = injectIntl(
  ({ prefix, noValidate = false, intl: { formatMessage } }) => (
    <Select
      noValidate={noValidate}
      name={`${prefix}.hull_material`}
      label="form.big_ship.field.hull_material.label"
      required
    >
      <option>{formatMessage({ id: 'form.big_ship.field.hull_material.placeholder' })}</option>
      <option>a</option>
      <option>b</option>
      <option>c</option>
    </Select>
  )
);
