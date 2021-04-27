import { List } from 'immutable';

import { SelectedServices, SelectedServicesProps } from '../../common/types/services';
import { stringToFloat } from '../../common/utils/applicationUtils';
import {
  HarborsQuery,
  HarborsQuery_harbors_edges_node_properties_piers as Piers,
  HarborsQuery_harbors_edges_node_properties_piers_edges_node_properties as PierProperties,
} from '../__generated__/HarborsQuery';
import { BerthFormValues, Harbors, HarborType } from './types';

export const anyPierHasProperty = (piers: Piers, property: keyof PierProperties): boolean => {
  return (
    piers.edges.filter((edge) => {
      return !!edge?.node?.properties?.[property];
    }).length > 0
  );
};

export const onlyUnique = (currentValue: string, index: number, array: string[]) => {
  return array.indexOf(currentValue) === index;
};

export const getSuitableBoatTypes = (piers: Piers): string[] => {
  return piers.edges
    .reduce<string[]>((acc, pier) => {
      const suitableBoatTypes: string[] =
        pier?.node?.properties?.suitableBoatTypes.map((type) => {
          return type.id;
        }) ?? [];

      return [...acc, ...suitableBoatTypes];
    }, [])
    .sort()
    .filter(onlyUnique);
};

export const getHarbors = (data?: HarborsQuery): Harbors => {
  if (!data?.harbors?.edges) return List([]);

  return List(
    data?.harbors?.edges.reduce<HarborType[]>((acc, harborData) => {
      const harborNode = harborData?.node;
      if (!(harborNode && harborNode.properties && harborNode.properties.piers && harborNode.geometry)) return acc;

      const {
        properties: { piers, ...properties },
      } = harborNode;

      const harbor: HarborType = {
        __typename: harborNode.__typename,
        id: harborNode.id,
        geometry: {
          coordinates: [harborNode.geometry.coordinates[1], harborNode.geometry.coordinates[0]],
        },
        availabilityLevel: properties.availabilityLevel,
        email: properties.email,
        imageFile: properties.imageFile,
        maxDepth: properties.maxDepth,
        maxLength: properties.maxLength,
        maxWidth: properties.maxWidth,
        municipality: properties.municipality,
        name: properties.name,
        numberOfPlaces: properties.numberOfPlaces,
        phone: properties.phone,
        servicemapId: properties.servicemapId,
        streetAddress: properties.streetAddress,
        wwwUrl: properties.wwwUrl,
        zipCode: properties.zipCode,
        mooring: anyPierHasProperty(piers, 'mooring'),
        electricity: anyPierHasProperty(piers, 'electricity'),
        water: anyPierHasProperty(piers, 'water'),
        wasteCollection: anyPierHasProperty(piers, 'wasteCollection'),
        gate: anyPierHasProperty(piers, 'gate'),
        lighting: anyPierHasProperty(piers, 'lighting'),
        suitableBoatTypes: getSuitableBoatTypes(piers),
      };

      return [harbor, ...acc];
    }, [])
  );
};

/**
 * Utility function that checks a supplied berth against filter values and selected services.
 * @param values An object that has properties of filter values.
 * @param selectedServices An immutable record of the selected services.
 * @returns A boolean of true value when the supplied berth meets the filter conditions, otherwise false.
 */
export const getBerthFilterByValues = (values: BerthFormValues, selectedServices: SelectedServices) => {
  const width = stringToFloat(values?.boatWidth) || 0;
  const length = stringToFloat(values?.boatLength) || 0;

  const boatType = values?.boatType;
  const services = Object.entries(selectedServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);

  return (b: HarborType) => {
    const filterByWidth = b.maxWidth ? Number(b.maxWidth) >= width : true;
    const filterByLength = b.maxLength ? Number(b.maxLength) >= length : true;

    const filterByService = (services as (keyof SelectedServicesProps)[]).reduce<boolean>(
      (acc, service) => acc && b[service],
      true
    );
    const filterByBoatTypeIds =
      boatType && b.suitableBoatTypes.length ? !!b.suitableBoatTypes.find((type) => type === boatType) : true;

    return filterByService && filterByWidth && filterByLength && filterByBoatTypeIds;
  };
};
