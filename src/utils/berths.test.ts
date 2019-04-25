import { List } from 'immutable';

import { isBerthSelected } from './berths';

const createBerth = (id: string) => ({
  id,
  name: 'boat',
  streetAddress: 'helsiginkatu helsinki',
  municipality: 'Helsinki',
  zipCode: '00100',
  phone: '1111111',
  email: 'test@test.com',
  wwwUrl: 'www.example.com',
  geometry: {
    type: 'test',
    coordinates: [12, 40]
  },
  imageFile: 'https://example.com/images',
  electricity: true,
  water: true,
  wasteCollection: false,
  gate: true,
  lighting: true,
  numberOfPlaces: 20,
  maximumDepth: 5,
  maximumWidth: 5,
  maximumLength: 20,
  availabilityLevel: {
    id: 'red',
    title: 'available',
    description: ''
  },
  excluded: false
});

describe('utils/berths', () => {
  describe('isBerthSelected', () => {
    const berthA = createBerth('a');
    const berthB = createBerth('b');
    const berthC = createBerth('c');
    const selectedBerths = List([berthA, berthB]);

    test('should return true if the supplied berth is in the selected list', () => {
      expect(isBerthSelected(selectedBerths, berthA)).toBe(true);
    });

    test('should return false if the supplied berth is not in the selected list', () => {
      expect(isBerthSelected(selectedBerths, berthC)).toBe(false);
    });
  });
});
