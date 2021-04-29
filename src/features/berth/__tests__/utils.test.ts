import { Record } from 'immutable';

import { harbor, createHarbor } from '../../../__fixtures__/harborFixture';
import { createBerthValues } from '../../../__fixtures__/formValuesFixture';
import { SelectedServicesProps } from '../../../common/types/services';
import { getBerthFilterByValues } from '../utils';

describe('berth utils', () => {
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
      expect(typeof returnValue(createHarbor())).toBe('boolean');
      expect(typeof returnValue(harbor)).toBe('boolean');
    });

    test('should return true if all filter conditions are met', () => {
      const value = getBerthFilterByValues(defaultValues, createSelectedServices())(createHarbor(matchOptions));

      expect(value).toBe(true);
    });

    test("should return false if services don't match", () => {
      const customOptions = createBerthOptions({ gate: false });
      const value = getBerthFilterByValues(
        defaultValues,
        createSelectedServices({ gate: true })
      )(createHarbor(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied width is larger than maxWidth after converting to cm', () => {
      const customOptions = createBerthOptions({ maxWidth: 4.9 });
      const value = getBerthFilterByValues(
        createBerthValues({ boatWidth: '5' }),
        createSelectedServices()
      )(createHarbor(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied length is larger than maxLength after converting to cm', () => {
      const customOptions = createBerthOptions({ maxLength: 9.0 });
      const value = getBerthFilterByValues(
        createBerthValues({ boatLength: '10' }),
        createSelectedServices()
      )(createHarbor(customOptions));

      expect(value).toBe(false);
    });

    test("should return false if suitableBoatTypes doesn't match with the supplied boatType", () => {
      const berthOptions = createBerthOptions({
        suitableBoatTypes: [{ __typename: 'BoatTypeType', id: '19' }],
      });
      const newBerth = createHarbor(berthOptions);
      const value = getBerthFilterByValues(createBerthValues({ boatType: '10' }), createSelectedServices())(newBerth);

      expect(value).toBe(false);
    });
  });
});
