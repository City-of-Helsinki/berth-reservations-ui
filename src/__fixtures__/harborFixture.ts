import {
  BoatTypesBerthsQuery_harbors,
  BoatTypesBerthsQuery_harbors_edges
} from '../utils/__generated__/BoatTypesBerthsQuery';

export const harbor: BoatTypesBerthsQuery_harbors_edges = {
  __typename: 'HarborTypeEdge',
  node: {
    __typename: 'HarborType',
    id: 'foo',
    geometry: {
      __typename: 'GeometryObjectType',
      coordinates: [60.18808000000039, 25.0665395178596]
    },
    properties: {
      __typename: 'HarborProperties',
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
      suitableBoatTypes: null,
      availabilityLevel: {
        __typename: 'AvailabilityLevelType',
        id: 'test',
        title: 'Paljon jonoa',
        description:
          'Satamat, joihin on paljon hakijoita ja yleensä useamman vuoden jonotusaika. Näistä satamista vapautuu paikkoja pääasiassa venepaikan vaihtajille.'
      },
      numberOfPlaces: 5,
      maximumWidth: 200,
      maximumLength: 400,
      maximumDepth: 13
    }
  }
};

export const harbors: BoatTypesBerthsQuery_harbors = {
  __typename: 'HarborTypeConnection',
  edges: [harbor]
};
