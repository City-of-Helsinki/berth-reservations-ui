import { List } from 'immutable';

import { SelectedWinterServices, SelectedWinterServicesProps } from '../../common/types/services';
import { stringToFloat } from '../../common/utils/applicationUtils';
import {
  WinterAreasQuery,
  WinterAreasQuery_winterStorageAreas_edges_node_properties_sections as Sections,
  WinterAreasQuery_winterStorageAreas_edges_node_properties_sections_edges_node_properties as SectionProperties,
} from '../__generated__/WinterAreasQuery';
import { WinterFormValues, WinterStorageAreaType, WinterStorageAreas } from './types';

const anySectionHasProperty = (sections: Sections, property: keyof SectionProperties): boolean => {
  return (
    sections.edges.filter((edge) => {
      return !!edge?.node?.properties?.[property];
    }).length > 0
  );
};

export const getWinterStorageAreas = (data?: WinterAreasQuery): WinterStorageAreas => {
  if (!data?.winterStorageAreas?.edges) return List([]);

  return List(
    data?.winterStorageAreas?.edges.reduce<WinterStorageAreaType[]>((acc, area) => {
      const areaNode = area?.node;
      if (!(areaNode && areaNode.properties && areaNode.geometry)) return acc;

      const {
        properties: { sections, ...properties },
      } = areaNode;

      const winterStorageArea: WinterStorageAreaType = {
        __typename: areaNode.__typename,
        id: areaNode.id,
        geometry: {
          coordinates: [areaNode.geometry.coordinates[1], areaNode.geometry.coordinates[0]],
        },
        availabilityLevel: properties.availabilityLevel,
        estimatedNumberOfSectionSpaces: properties.estimatedNumberOfSectionSpaces,
        estimatedNumberOfUnmarkedSpaces: properties.estimatedNumberOfUnmarkedSpaces,
        imageFile: properties.imageFile,
        maxLength: properties.maxLength,
        maxLengthOfSectionSpaces: properties.maxLengthOfSectionSpaces,
        maxWidth: properties.maxWidth,
        municipality: properties.municipality,
        name: properties.name,
        servicemapId: properties.servicemapId,
        streetAddress: properties.streetAddress,
        wwwUrl: properties.wwwUrl,
        zipCode: properties.zipCode,
        electricity: anySectionHasProperty(sections, 'electricity'),
        water: anySectionHasProperty(sections, 'water'),
        gate: anySectionHasProperty(sections, 'gate'),
        repairArea: anySectionHasProperty(sections, 'repairArea'),
        summerStorageForDockingEquipment: anySectionHasProperty(sections, 'summerStorageForDockingEquipment'),
        summerStorageForTrailers: anySectionHasProperty(sections, 'summerStorageForTrailers'),
        summerStorageForBoats: anySectionHasProperty(sections, 'summerStorageForBoats'),
      };

      return [winterStorageArea, ...acc];
    }, [])
  );
};

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

  const width = stringToFloat(values?.boatWidth) || 0;
  const userBoatLength = stringToFloat(values?.boatLength) || 0;

  const length = boatHasTrailer ? userBoatLength + 1 : userBoatLength;
  // Increase by 1 meter to filter if user have trailer.

  const services = Object.entries(selectedWinterServices.toObject())
    .filter(([, state]) => state)
    .map(([type]) => type);

  return (area: WinterStorageAreaType) => {
    const filterByWidth = area.maxWidth ? Number(area.maxWidth) >= width : true;
    const filterByLength = area.maxLength ? Number(area.maxLength) >= length : true;
    const filterByBoatTypeIds = true;

    const filterByService = (services as (keyof SelectedWinterServicesProps)[]).reduce<boolean>(
      (acc, service) => acc && area[service],
      true
    );

    return filterByService && filterByWidth && filterByLength && filterByBoatTypeIds;
  };
};

/**
 * Filter just areas with marked places
 *
 * @param {WinterStorageAreaType} storage
 * @returns {boolean}
 */
export const filterAreasWithMarkedPlaces = (storage: WinterStorageAreaType) => {
  return !storage.estimatedNumberOfUnmarkedSpaces;
};
