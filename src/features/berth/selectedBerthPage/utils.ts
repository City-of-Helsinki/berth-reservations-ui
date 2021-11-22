import { HarborsQuery } from '../../__generated__/HarborsQuery';
import { BerthFormValues } from '../types';
import { BoatInfo } from './types';

export const getBoatInfo = (data: HarborsQuery | undefined, values: BerthFormValues): BoatInfo | undefined => {
  if (!data?.boatTypes) return undefined;
  const boatType = data.boatTypes.find((type) => !!type && type.id === values.boatType);
  if (!boatType?.name) return undefined;
  return {
    boatType: boatType.name,
    width: values.boatWidth,
    length: values.boatLength,
  };
};
