import { List } from 'immutable';
import get from 'lodash/get';

import { SelectedIds } from '../components/berths/types';
import { StorageAreaFilter } from '../redux/reducers/WinterAreaReducers';
import { BerthFormValues, BerthType } from '../types/berth';
import {
  SelectedServices,
  SelectedServicesProps,
  SelectedWinterServices,
  SelectedWinterServicesProps
} from '../types/services';
import { WinterFormValues, WinterStorageType } from '../types/winterStorage';

/**
 * Utility function that converts centimeters to meters.
 * @param length A number to be converted, it accepts null values as well.
 * @returns A converted number or an undefined/null value based on the parameter .
 */
export const convertCmToM = (length?: number | null) => length && length / 100;

/**
 * Utility function that checks a supplied berth against filter values and selected services.
 * @param values An object that has properties of filter values.
 * @param selectedServices An immutable record of the selected services.
 * @returns A boolean of true value when the supplied berth meets the filter conditions, otherwise false.
 */
export const getBerthFilterByValues = (
  values: BerthFormValues,
  selectedServices: SelectedServices
) => {
  const boatHasTrailer = get(values, 'boatStoredOnTrailer');

  const width = (stringToFloat(get(values, 'boatWidth', '')) || 0) * 100;
  const userBoatLength = stringToFloat(get(values, 'boatLength', '')) || 0;

  const length = (boatHasTrailer ? userBoatLength + 1 : userBoatLength) * 100;
  // Increase by 1 meter to filter if user have trailer.

  const boatType = get(values, 'boatType', '');
  const services = Object.entries(selectedServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);

  return (b: BerthType) => {
    const filterByWidth = b.maximumWidth ? Number(b.maximumWidth) >= width : true;
    const filterByLength = b.maximumLength ? Number(b.maximumLength) >= length : true;
    let filterByService = true;
    let filterByBoatTypeIds = true;

    filterByService = (services as Array<keyof SelectedServicesProps>).reduce<boolean>(
      (acc, service) => acc && !!b[service],
      true
    );
    filterByBoatTypeIds =
      boatType && b.suitableBoatTypes.length
        ? !!b.suitableBoatTypes.find(type => type.id === boatType)
        : true;

    return filterByService && filterByWidth && filterByLength && filterByBoatTypeIds;
  };
};

/**
 * Utility function that checks a supplied winter area against filter values and selected services.
 * @param values An object that has properties of filter values.
 * @param selectedWinterServices An immutable record of the selected services.
 * @returns A boolean of true value when the supplied winter area meets the filter conditions, otherwise false.
 */
export const getWinterStorageFilterByValues = (
  values: WinterFormValues,
  selectedWinterServices: SelectedWinterServices,
  storageAreaFilter?: StorageAreaFilter
) => {
  const boatHasTrailer = get(values, 'boatStoredOnTrailer');

  const width = (stringToFloat(get(values, 'boatWidth', '')) || 0) * 100;
  const userBoatLength = stringToFloat(get(values, 'boatLength', '')) || 0;

  const length = (boatHasTrailer ? userBoatLength + 1 : userBoatLength) * 100;
  // Increase by 1 meter to filter if user have trailer.

  const services = Object.entries(selectedWinterServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);

  return (b: WinterStorageType) => {
    const filterByWidth = b.maximumWidth ? Number(b.maximumWidth) >= width : true;
    const filterByLength = b.maximumLength ? Number(b.maximumLength) >= length : true;
    let filterByService = true;
    const filterByBoatTypeIds = true;
    const filterByStorageArea = filterStorageArea(b, storageAreaFilter);

    filterByService = (services as Array<keyof SelectedWinterServicesProps>).reduce<boolean>(
      (acc, service) => acc && !!b[service],
      true
    );

    return (
      filterByService &&
      filterByWidth &&
      filterByLength &&
      filterByBoatTypeIds &&
      filterByStorageArea
    );
  };
};

/**
 * Check if current storage is fit with current filter
 *
 * @param {WinterStorageType} storage
 * @param {StorageAreaFilter} [filterType]
 * @returns {boolean}
 */
const filterStorageArea = (storage: WinterStorageType, filterType?: StorageAreaFilter) => {
  if (filterType === StorageAreaFilter.SHOW_APPOINTED_AREA && !storage.numberOfMarkedPlaces) {
    return false;
  }
  if (filterType === StorageAreaFilter.SHOW_FREE_AREA && storage.numberOfMarkedPlaces) {
    return false;
  }

  return true;
};

export const getResources = <T, P, G extends { coordinates: [number, number] }>(
  data: {
    edges: Array<{
      node: {
        id: string;
        __typename: T;
        properties?: P;
        geometry?: G | null;
      } | null;
    } | null>;
  } | null
) => {
  if (!data || !data.edges) return List([]);
  return List(
    data.edges.reduce<
      Array<
        {
          __typename: T;
          id: string;
          geometry: { coordinates: number[] };
        } & P
      >
    >((acc, harbor) => {
      if (!(harbor && harbor.node && harbor.node.properties && harbor.node.geometry)) return [];

      return [
        {
          ...harbor.node.properties,
          id: harbor.node.id,
          geometry: {
            coordinates: [harbor.node.geometry.coordinates[1], harbor.node.geometry.coordinates[0]]
          },
          __typename: harbor.node.__typename
        },
        ...acc
      ];
    }, [])
  );
};

export const getSelectedResources = <T extends { id: string }>(
  selectedIds: SelectedIds,
  resources: List<T>
) =>
  selectedIds.reduce<List<T>>((acc, id) => {
    const matched = resources.find(resource => resource.id === id);
    return matched ? acc.push(matched) : acc;
  }, List([]));

export const isResourceSelected = (selectedBerths: SelectedIds, resourceId: string): boolean =>
  !!selectedBerths.find(selectedBerth => selectedBerth === resourceId);

/**
 * Convert number in string to floating number.
 *
 * @param {string | undefined} str
 * @returns {number | undefined}
 */
export const stringToFloat = (str: string | undefined | null) => {
  if (!str) return undefined;

  const num = Number(str.replace(',', '.'));
  return !Number.isNaN(num) ? num : undefined;
};
