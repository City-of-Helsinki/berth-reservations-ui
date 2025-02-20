import { List } from 'immutable';

import { Harbors, HarborType } from '../features/berth/types';

export const createHarbor = (options?: Partial<HarborType>): HarborType => {
  const newHarbor: HarborType = {
    __typename: 'HarborNode',
    id: 'foo',
    name: 'Airorannan venesatama B',
    streetAddress: 'Airoranta 2',
    zipCode: '00830',
    municipality: 'Helsinki',
    phone: '123',
    email: 'test@da.fi',
    wwwUrl:
      'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/kaupungin-venepaikat/kaupungin-venesatamat/airorannan-venesatama',
    imageFile: 'https://venepaikat-api.test.hel.ninja/media/harbors/airoranta-b/40393.jpg',
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
    maxWidth: 200,
    maxLength: 400,
    maxDepth: 13,
    geometry: { coordinates: [60.18808000000039, 25.0665395178596] },
  };

  return { ...newHarbor, ...options };
};

export const harbor = createHarbor();
export const harbors: Harbors = List([harbor]);
