import React from 'react';
import { useTranslation } from 'react-i18next';

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
    id="boatType"
    className={className}
    name={`boatType`}
    label="form.registered.field.type.label"
    required={required}
  >
    <option value="">-</option>
    {boatTypes &&
      boatTypes.reduce<JSX.Element[]>((acc, type) => {
        if (!type) return acc;
        return [
          <option key={type.id} value={type.id}>
            {type.name}
          </option>,
          ...acc,
        ];
      }, [])}
  </Select>
);

const propulsions = ['gasoline', 'diesel', 'fuel_oil', 'electricity', 'natural_gas', 'other'];
export const Propulsion = () => {
  const { t } = useTranslation();

  return (
    <Select id="boatPropulsion" name={`boatPropulsion`} label="form.big_ship.field.propulsion.label" required>
      <option value="">-</option>
      {propulsions.map((option) => (
        <option key={option} value={option}>
          {t(`form.big_ship.field.propulsion.${option}`)}
        </option>
      ))}
    </Select>
  );
};

const hullMaterials = ['aluminium', 'concrete', 'thermoplastic', 'rubber', 'fibreglass', 'wood', 'steel', 'other'];

export const HullMaterial = () => {
  const { t } = useTranslation();

  return (
    <Select id="boatHullMaterial" name={`boatHullMaterial`} label="form.big_ship.field.hull_material.label" required>
      <option value="">-</option>
      {hullMaterials.map((option) => (
        <option key={option} value={option}>
          {t(`form.big_ship.field.hull_material.${option}`)}
        </option>
      ))}
    </Select>
  );
};
