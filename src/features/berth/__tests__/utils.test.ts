import { Record } from 'immutable';

import { berth, createBerth } from '../../../__fixtures__/berthFixture';
import { createBerthValues } from '../../../__fixtures__/formValuesFixture';
import { SelectedServicesProps } from '../../../common/types/services';
import { mockPiers } from '../__fixtures__/mockData';
import { anyPierHasProperty, getBerthFilterByValues, getSuitableBoatTypes, onlyUnique } from '../utils';

describe('berth utils', () => {
  describe('anyPierHasProperty', () => {
    test('should return correct information', () => {
      expect(anyPierHasProperty(mockPiers, 'electricity')).toBe(false);
      expect(anyPierHasProperty(mockPiers, 'gate')).toBe(true);
      expect(anyPierHasProperty(mockPiers, 'lighting')).toBe(true);
      expect(anyPierHasProperty(mockPiers, 'mooring')).toBe(true);
      expect(anyPierHasProperty(mockPiers, 'wasteCollection')).toBe(false);
      expect(anyPierHasProperty(mockPiers, 'water')).toBe(true);
    });
  });

  describe('onlyUnique', () => {
    test('should filter entries and return only unique entries', () => {
      const testData = ['1', '1', '2', '3', '4', '1'];
      expect(testData.filter(onlyUnique)).toEqual(['1', '2', '3', '4']);
    });
  });

  describe('getSuitableBoatTypes', () => {
    test('should return all suitable boat types from a list of piers', () => {
      expect(getSuitableBoatTypes(mockPiers)).toEqual(['1', '2', '3', '5']);
    });
  });

  describe('getBerthFilterByValues', () => {
    const defaultValues = createBerthValues({
      boatLength: '10.2',
      boatType: '8',
      boatWidth: '4.2',
    });

    const matchOptions = {
      maxLength: 1100,
      suitableBoatTypes: [],
      maxWidth: 500,
    };

    const createBerthOptions = (options?: {}) => ({
      ...matchOptions,
      ...options,
    });

    const createSelectedServices = (services?: Partial<SelectedServicesProps>) =>
      Record({
        electricity: false,
        water: false,
        wasteCollection: false,
        gate: false,
        lighting: false,
        ...services,
      })();

    test('should return a function that returns a boolean', () => {
      const returnValue = getBerthFilterByValues(defaultValues, createSelectedServices());

      expect(typeof returnValue).toBe('function');
      expect(typeof returnValue(createBerth())).toBe('boolean');
      expect(typeof returnValue(berth)).toBe('boolean');
    });

    test('should return true if all filter conditions are met', () => {
      const value = getBerthFilterByValues(defaultValues, createSelectedServices())(createBerth(matchOptions));

      expect(value).toBe(true);
    });

    test("should return false if services don't match", () => {
      const customOptions = createBerthOptions({ gate: false });
      const value = getBerthFilterByValues(
        defaultValues,
        createSelectedServices({ gate: true })
      )(createBerth(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied width is larger than maxWidth after converting to cm', () => {
      const customOptions = createBerthOptions({ maxWidth: 490 });
      const value = getBerthFilterByValues(
        createBerthValues({ boatWidth: '5' }),
        createSelectedServices()
      )(createBerth(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied length is larger than maxLength after converting to cm', () => {
      const customOptions = createBerthOptions({ maxLength: 900 });
      const value = getBerthFilterByValues(
        createBerthValues({ boatLength: '10' }),
        createSelectedServices()
      )(createBerth(customOptions));

      expect(value).toBe(false);
    });

    test("should return false if suitableBoatTypes doesn't match with the supplied boatType", () => {
      const berthOptions = createBerthOptions({
        suitableBoatTypes: [{ __typename: 'BoatTypeType', id: '19' }],
      });
      const newBerth = createBerth(berthOptions);
      const value = getBerthFilterByValues(createBerthValues({ boatType: '10' }), createSelectedServices())(newBerth);

      expect(value).toBe(false);
    });
  });
});
