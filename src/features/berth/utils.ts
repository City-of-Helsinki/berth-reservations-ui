import { List } from 'immutable';

import { SelectedServices, SelectedServicesProps } from '../../common/types/services';
import { stringToFloat } from '../../common/utils/applicationUtils';
import {
  HarborsQuery,
  HarborsQuery_harbors_edges_node_properties_suitableBoatTypes as SuitableBoatTypes,
} from '../__generated__/HarborsQuery';
import { BerthFormValues, Harbors, HarborType } from './types';

export const getSuitableBoatTypes = (suitableBoatTypes?: (SuitableBoatTypes | null)[]): string[] => {
  return (
    suitableBoatTypes?.reduce<string[]>((acc, boatType) => {
      if (!boatType) return acc;
      return [...acc, boatType.id];
    }, []) ?? []
  );
};

export const getHarbors = (data?: HarborsQuery): Harbors => {
  if (!data?.harbors?.edges) return List([]);

  return List(
    data?.harbors?.edges.reduce<HarborType[]>((acc, harborData) => {
      const harborNode = harborData?.node;
      if (!(harborNode && harborNode.properties && harborNode.geometry)) return acc;

      const { properties } = harborNode;

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
        mooring: properties.mooring,
        electricity: properties.electricity,
        water: properties.water,
        wasteCollection: properties.wasteCollection,
        gate: properties.gate,
        lighting: properties.lighting,
        suitableBoatTypes: getSuitableBoatTypes(properties?.suitableBoatTypes),
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
