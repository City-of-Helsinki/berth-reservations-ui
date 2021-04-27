import { HarborsQuery_harbors_edges_node_properties_piers as Piers } from '../../__generated__/HarborsQuery';

export const mockPiers: Piers = {
  __typename: 'PierNodeConnection',
  edges: [
    {
      __typename: 'PierNodeEdge',
      node: {
        __typename: 'PierNode',
        id: 'MOCKPIER-1',
        properties: {
          __typename: 'PierProperties',
          electricity: false,
          gate: true,
          lighting: false,
          mooring: false,
          suitableBoatTypes: [
            {
              __typename: 'BoatTypeType',
              id: '1',
            },
            {
              __typename: 'BoatTypeType',
              id: '3',
            },
          ],
          wasteCollection: false,
          water: true,
        },
      },
    },
    {
      __typename: 'PierNodeEdge',
      node: {
        __typename: 'PierNode',
        id: 'MOCKPIER-2',
        properties: {
          __typename: 'PierProperties',
          electricity: false,
          gate: true,
          lighting: true,
          mooring: true,
          suitableBoatTypes: [
            {
              __typename: 'BoatTypeType',
              id: '1',
            },
            {
              __typename: 'BoatTypeType',
              id: '5',
            },
          ],
          wasteCollection: false,
          water: false,
        },
      },
    },
    {
      __typename: 'PierNodeEdge',
      node: {
        __typename: 'PierNode',
        id: 'MOCKPIER-3',
        properties: {
          __typename: 'PierProperties',
          electricity: false,
          gate: true,
          lighting: false,
          mooring: true,
          suitableBoatTypes: [
            {
              __typename: 'BoatTypeType',
              id: '2',
            },
            {
              __typename: 'BoatTypeType',
              id: '3',
            },
          ],
          wasteCollection: false,
          water: false,
        },
      },
    },
  ],
};
