import { SelectedServices, SelectedServicesProps } from '../../common/types/services';
import { stringToFloat } from '../../common/utils/applicationUtils';
import { BerthFormValues, BerthType } from './types';

/**
 * Utility function that checks a supplied berth against filter values and selected services.
 * @param values An object that has properties of filter values.
 * @param selectedServices An immutable record of the selected services.
 * @returns A boolean of true value when the supplied berth meets the filter conditions, otherwise false.
 */
export const getBerthFilterByValues = (values: BerthFormValues, selectedServices: SelectedServices) => {
  const width = (stringToFloat(values?.boatWidth) || 0) * 100;
  const userBoatLength = stringToFloat(values?.boatLength) || 0;

  const length = userBoatLength * 100;

  const boatType = values?.boatType;
  const services = Object.entries(selectedServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);

  return (b: BerthType) => {
    const filterByWidth = b.maximumWidth ? Number(b.maximumWidth) >= width : true;
    const filterByLength = b.maximumLength ? Number(b.maximumLength) >= length : true;

    const filterByService = (services as (keyof SelectedServicesProps)[]).reduce<boolean>(
      (acc, service) => acc && b[service],
      true
    );
    const filterByBoatTypeIds =
      boatType && b.suitableBoatTypes.length
        ? !!b.suitableBoatTypes.find((type) => !!type && type.id === boatType)
        : true;

    return filterByService && filterByWidth && filterByLength && filterByBoatTypeIds;
  };
};
