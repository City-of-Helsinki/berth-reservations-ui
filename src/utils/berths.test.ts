import { List, Record } from 'immutable';

import { createBerth } from '../__fixtures__/berthFixture';
import { winterArea } from '../__fixtures__/winterStorageFixture';
import { genValidSelector, getBerthFilterByValues, isBerthSelected } from './berths';

import { SelectedServicesProps } from '../types/services';

describe('utils/berths', () => {
  describe('getBerthFilterByValues', () => {
    const createValues = (values?: {}) => ({
      boatLength: '10.2',
      boatType: '8',
      boatWidth: '4.2',
      ...values
    });

    const matchOptions = {
      maximumLength: 1100,
      suitableBoatTypes: null,
      maximumWidth: 500
    };

    const createBerthOptions = (options?: {}) => ({
      ...matchOptions,
      ...options
    });

    const createSelectedServices = (services?: Partial<SelectedServicesProps>) =>
      Record({
        electricity: false,
        water: false,
        wasteCollection: false,
        gate: false,
        lighting: false,
        ...services
      })();

    test('should return a function that returns a boolean', () => {
      const returnValue = getBerthFilterByValues(createValues(), createSelectedServices());

      expect(typeof returnValue).toBe('function');
      expect(typeof returnValue(createBerth())).toBe('boolean');
      expect(typeof returnValue(winterArea)).toBe('boolean');
    });

    test('should return true if all filter conditions are met', () => {
      const value = getBerthFilterByValues(createValues(), createSelectedServices())(
        createBerth(matchOptions)
      );

      expect(value).toBe(true);
    });

    test("should return false if services don't match", () => {
      const customOptions = createBerthOptions({ gate: false });
      const value = getBerthFilterByValues(createValues(), createSelectedServices({ gate: true }))(
        createBerth(customOptions)
      );

      expect(value).toBe(false);
    });

    test('should return false if the supplied width is larger than maximumWidth after converting to cm', () => {
      const customOptions = createBerthOptions({ maximumWidth: 490 });
      const value = getBerthFilterByValues(
        createValues({ boatWidth: '5' }),
        createSelectedServices()
      )(createBerth(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied length is larger than maximumLength after converting to cm', () => {
      const customOptions = createBerthOptions({ maximumLength: 900 });
      const value = getBerthFilterByValues(
        createValues({ boatLength: '10' }),
        createSelectedServices()
      )(createBerth(customOptions));

      expect(value).toBe(false);
    });

    test("should return false if suitableBoatTypes doesn't match with the supplied boatType", () => {
      const berthOptions = createBerthOptions({
        suitableBoatTypes: [{ __typename: 'BoatTypeType', id: '19' }]
      });
      const berth = createBerth(berthOptions);
      const value = getBerthFilterByValues(
        createValues({ boatType: '10' }),
        createSelectedServices()
      )(berth);

      expect(value).toBe(false);
    });
  });

  describe('isBerthSelected', () => {
    const berthA = createBerth({ id: 'a' });
    const berthB = createBerth({ id: 'b' });
    const berthC = createBerth({ id: 'c' });
    const selectedBerths = List([berthA, berthB]);

    test('should return true if the supplied berth is in the selected list', () => {
      expect(isBerthSelected(selectedBerths, berthA)).toBe(true);
    });

    test('should return false if the supplied berth is not in the selected list', () => {
      expect(isBerthSelected(selectedBerths, berthC)).toBe(false);
    });
  });

  describe('genValidSelector', () => {
    test('should replace digits in the beginning of the supplied string', () => {
      expect(genValidSelector('1ABC123')).toBe('xABC123');
    });

    test('should replace illegal characters', () => {
      expect(genValidSelector('ABC=123/')).toBe('ABCx123x');
    });
  });
});
