import { List } from 'immutable';

import { WinterAreas } from '../components/berths/types';
import { WinterStorageType } from '../types/winterStorage';

export const createWinterArea = (options?: Partial<WinterStorageType>): WinterStorageType => {
  const newWinterArea: WinterStorageType = {
    __typename: 'WinterStorageAreaType',
    id: 'V2ludlO',
    name: 'Marjaniemi',
    streetAddress: 'Niittyranta 19',
    zipCode: '00930',
    imageFile: 'https://venepaikka-api.test.hel.ninja/media/winter_areas/9/marjaniemi.jpg',
    numberOfMarkedPlaces: null,
    maximumWidth: null,
    maximumLength: null,
    numberOfSectionSpaces: null,
    maxLengthOfSectionSpaces: null,
    numberOfUnmarkedSpaces: 100,
    servicemapId: null,
    electricity: true,
    water: true,
    gate: false,
    repairArea: false,
    summerStorageForDockingEquipment: true,
    summerStorageForTrailers: true,
    summerStorageForBoats: false,
    municipality: 'Helsinki',
    wwwUrl: '',
    availabilityLevel: {
      __typename: 'AvailabilityLevelType',
      id: '1',
      title: 'Short waiting periods.',
      description: '',
    },
    geometry: { coordinates: [60.18808000000039, 25.0665395178596] },
  };

  return { ...newWinterArea, ...options };
};

export const winterArea = createWinterArea();
export const winterAreas: WinterAreas = List([winterArea]);
