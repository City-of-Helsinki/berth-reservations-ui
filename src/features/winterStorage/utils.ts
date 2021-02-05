import { SelectedWinterServices, SelectedWinterServicesProps } from '../../common/types/services';
import { stringToFloat } from '../../common/utils/applicationUtils';
import { WinterFormValues, WinterStorageType } from './types';

/**
 * Utility function that checks a supplied winter area against filter values and selected services.
 * @param values An object that has properties of filter values.
 * @param selectedWinterServices An immutable record of the selected services.
 * @returns A boolean of true value when the supplied winter area meets the filter conditions, otherwise false.
 */
export const getWinterStorageFilterByValues = (
  values: WinterFormValues,
  selectedWinterServices: SelectedWinterServices
) => {
  const boatHasTrailer = values?.boatStoredOnTrailer;

  const width = (stringToFloat(values?.boatWidth) || 0) * 100;
  const userBoatLength = stringToFloat(values?.boatLength) || 0;

  const length = (boatHasTrailer ? userBoatLength + 1 : userBoatLength) * 100;
  // Increase by 1 meter to filter if user have trailer.

  const services = Object.entries(selectedWinterServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);

  return (b: WinterStorageType) => {
    const filterByWidth = b.maximumWidth ? Number(b.maximumWidth) >= width : true;
    const filterByLength = b.maximumLength ? Number(b.maximumLength) >= length : true;
    const filterByBoatTypeIds = true;

    const filterByService = (services as (keyof SelectedWinterServicesProps)[]).reduce<boolean>(
      (acc, service) => acc && b[service],
      true
    );

    return filterByService && filterByWidth && filterByLength && filterByBoatTypeIds;
  };
};

/**
 * Filter just areas with marked places
 *
 * @param {WinterStorageType} storage
 * @returns {boolean}
 */
export const filterAreasWithMarkedPlaces = (storage: WinterStorageType) => {
  return !!storage.numberOfMarkedPlaces;
};
