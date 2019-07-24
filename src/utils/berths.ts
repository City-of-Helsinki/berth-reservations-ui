import { List } from 'immutable';
import get from 'lodash/get';

import { Berths, SelectedIds } from '../components/berths/types';
import { StorageAreaFilter } from '../redux/reducers/WinterAreaReducers';
import { BerthType } from '../types/berth';
import {
  SelectedServices,
  SelectedServicesProps,
  SelectedWinterServices,
  SelectedWinterServicesProps
} from '../types/services';
import { WinterStorageType } from '../types/winterStorage';
import { BoatTypesBerthsQuery_harbors } from './__generated__/BoatTypesBerthsQuery';
import { WinterAreasQuery_winterStorageAreas } from './__generated__/WinterAreasQuery';

/**
 * Utility function that converts centimeters to meters.
 * @param length A number to be converted, it accepts null values as well.
 * @returns A converted number or an undefined/null value based on the parameter .
 */
export const convertCmToM = (length?: number | null) => length && length / 100;

/**
 * Utility function that checks a supplied berth/winter area against filter values and selected services.
 * @param values An object that has properties of filter values.
 * @param selectedServices An immutable record of the selected services.
 * @returns A boolean of true value when the supplied berth/winter area meets the filter conditions, otherwise false.
 */
export const getBerthFilterByValues = (
  values: {},
  selectedServices: SelectedServices | SelectedWinterServices,
  storageAreaFilter?: StorageAreaFilter
) => {
  const boatHasTrailer = get(values, 'boatStoredOnTrailer');

  const width = stringToFloat(get(values, 'boatWidth', '')) * 100;
  const userBoatLength = stringToFloat(get(values, 'boatLength', ''));

  const length = (boatHasTrailer ? userBoatLength + 1 : userBoatLength) * 100;
  // Increase by 1 meter to filter if user have trailer.

  const boatType = get(values, 'boatType', '');
  const services = Object.entries(selectedServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);

  return (b: BerthType | WinterStorageType) => {
    const filterByWidth = b.maximumWidth ? Number(b.maximumWidth) >= width : true;
    const filterByLength = b.maximumLength ? Number(b.maximumLength) >= length : true;
    let filterByService = true;
    let filterByBoatTypeIds = true;
    const filterByStorageArea = filterStorageArea(b, storageAreaFilter);

    switch (b.__typename) {
      case 'HarborType':
        filterByService = (services as Array<keyof SelectedServicesProps>).reduce<boolean>(
          (acc, service) => acc && !!b[service],
          true
        );
        filterByBoatTypeIds =
          boatType && b.suitableBoatTypes
            ? !!b.suitableBoatTypes.find(type => !!type && type.id === boatType)
            : true;
        break;

      default:
        filterByService = (services as Array<keyof SelectedWinterServicesProps>).reduce<boolean>(
          (acc, service) => acc && !!b[service],
          true
        );
        break;
    }
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
 * @param {(WinterStorageType | BerthType)} storage
 * @param {StorageAreaFilter} [filterType]
 * @returns {boolean}
 */
const filterStorageArea = (
  storage: WinterStorageType | BerthType,
  filterType?: StorageAreaFilter
) => {
  // @ts-ignore
  if (filterType === StorageAreaFilter.SHOW_APPOINTED_AREA && !storage.numberOfMarkedPlaces) {
    return false;
  }
  // @ts-ignore
  if (filterType === StorageAreaFilter.SHOW_FREE_AREA && storage.numberOfMarkedPlaces) {
    return false;
  }

  return true;
};

export const getBerths = (
  data: WinterAreasQuery_winterStorageAreas | BoatTypesBerthsQuery_harbors | null
): List<BerthType | WinterStorageType> => {
  if (!data || !data.edges) return List([]);

  // TODO: refactor for better DRY code
  switch (data.__typename) {
    case 'HarborTypeConnection':
      return List(
        data.edges.reduce<BerthType[]>((acc, harbor) => {
          if (!(harbor && harbor.node && harbor.node.properties && harbor.node.geometry)) return [];

          return [
            {
              ...harbor.node.properties,
              id: harbor.node.id,
              geometry: {
                coordinates: [
                  harbor.node.geometry.coordinates[1],
                  harbor.node.geometry.coordinates[0]
                ]
              },
              __typename: harbor.node.__typename
            },
            ...acc
          ];
        }, [])
      );

    default:
      return List(
        data.edges.reduce<WinterStorageType[]>((acc, harbor) => {
          if (!(harbor && harbor.node && harbor.node.properties && harbor.node.geometry)) return [];

          return [
            {
              ...harbor.node.properties,
              id: harbor.node.id,
              geometry: {
                coordinates: [
                  harbor.node.geometry.coordinates[1],
                  harbor.node.geometry.coordinates[0]
                ]
              },
              __typename: harbor.node.__typename
            },
            ...acc
          ];
        }, [])
      );
  }
};

export const getSelectedResources = (selectedIds: SelectedIds, resources: Berths) =>
  selectedIds.reduce<Berths>((acc, id) => {
    const matched = resources.find(resource => resource.id === id);
    return matched ? acc.push(matched) : acc;
  }, List([]));

export const isBerthSelected = (
  selectedBerths: SelectedIds,
  berth: BerthType | WinterStorageType
): boolean => !!selectedBerths.find(selectedBerth => selectedBerth === berth.id);

/**
 * Generates a valid CSS selector from a string by replacing invalid characters.
 * @param selector A string to be checked.
 * @returns A valid CSS selector.
 */
export const genValidSelector = (selector: string) => selector.replace(/^[^a-z]+|[^\w:.-]+/gi, 'x');

/**
 * Convert number in string to floating number.
 *
 * @param {string} str
 * @returns {number}
 */
export const stringToFloat = (str: string) => {
  if (!str) return 0;
  return Number(str.replace(',', '.'));
};
