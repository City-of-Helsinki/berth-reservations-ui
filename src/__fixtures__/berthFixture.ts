import { List } from 'immutable';

import { Berths } from '../components/berths/types';
import { BerthType } from '../types/berth';

export const createBerth = (options?: Partial<BerthType>): BerthType => {
  const newBerth: BerthType = {
    __typename: 'HarborType',
    id: 'foo',
    name: 'Airorannan venesatama B',
    streetAddress: 'Airoranta 2',
    zipCode: '00830',
    municipality: 'Helsinki',
    phone: '123',
    email: 'test@da.fi',
    wwwUrl:
      'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/kaupungin-venesatamat/airorannan-venesatama',
    imageFile: 'https://venepaikka-api.test.hel.ninja/media/harbors/airoranta-b/40393.jpg',
    electricity: false,
    water: false,
    wasteCollection: false,
    gate: false,
    lighting: false,
    mooring: false,
    servicemapId: '123',
    suitableBoatTypes: [],
    availabilityLevel: {
      __typename: 'AvailabilityLevelType',
      id: 'test',
      title: 'Paljon jonoa',
      description:
        'Satamat, joihin on paljon hakijoita ja yleensä useamman vuoden jonotusaika. Näistä satamista vapautuu paikkoja pääasiassa venepaikan vaihtajille.',
    },
    numberOfPlaces: 5,
    maximumWidth: 200,
    maximumLength: 400,
    maximumDepth: 13,
    geometry: { coordinates: [60.18808000000039, 25.0665395178596] },
  };

  return { ...newBerth, ...options };
};

export const berth = createBerth();
export const berths: Berths = List([berth]);
