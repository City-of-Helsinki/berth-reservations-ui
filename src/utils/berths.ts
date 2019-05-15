import { List } from 'immutable';
import get from 'lodash/get';

import { Berths } from '../components/berths/types';
import {
  SelectedServices,
  SelectedServicesProps,
  SelectedWinterServices,
  SelectedWinterServicesProps
} from '../types/services';

import { BerthType } from '../types/berth';
import { WinterStorageType } from '../types/winterStorage';

import { BoatTypesBerthsQuery_harbors } from './__generated__/BoatTypesBerthsQuery';
import { WinterAreasQuery_winterStorageAreas } from './__generated__/WinterAreasQuery';

export const getBerthFilterByValues = (
  values: {},
  selectedServices: SelectedServices | SelectedWinterServices
) => {
  const width = Number(get(values, 'boatWidth', '').replace(',', '.')) * 100;
  const length = Number(get(values, 'boatLength', '').replace(',', '.')) * 100;
  const boatType = get(values, 'boatType', '').replace(',', '.');
  const services = Object.entries(selectedServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);

  return (b: BerthType | WinterStorageType) => {
    const filterByWidth = b.maximumWidth ? Number(b.maximumWidth) >= width : true;
    const filterByLength = b.maximumLength ? Number(b.maximumLength) >= length : true;
    let filterByService = true;
    let filterByBoatTypeIds = true;

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
    return filterByService && filterByWidth && filterByLength && filterByBoatTypeIds;
  };
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

export const isBerthSelected = (
  selectedBerths: Berths,
  berth: BerthType | WinterStorageType
): boolean => !!selectedBerths.find(selectedBerth => selectedBerth.id === berth.id);

/**
 * Generates a valid CSS selector from a string by replacing invalid characters.
 * @param selector A string to be checked.
 * @returns A valid CSS selector.
 */
export const genValidSelector = (selector: string) => selector.replace(/^[^a-z]+|[^\w:.-]+/gi, 'x');
