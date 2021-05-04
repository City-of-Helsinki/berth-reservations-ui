import { Record } from 'immutable';

import { createWinterValues } from '../../../__fixtures__/formValuesFixture';
import { createWinterArea, winterArea } from '../../../__fixtures__/winterStorageFixture';
import { SelectedWinterServicesProps } from '../../../common/types/services';
import { getWinterStorageFilterByValues } from '../utils';

describe('winter storage utils', () => {
  describe('getWinterStorageFilterByValues', () => {
    const defaultValues = createWinterValues({
      boatLength: '10.2',
      boatType: '8',
      boatWidth: '4.2',
    });

    const matchOptions = {
      maxLength: 11,
      maxWidth: 5,
    };

    const createAreaOptions = (options?: {}) => ({
      ...matchOptions,
      ...options,
    });

    const createWinterSelectedServices = (services?: Partial<SelectedWinterServicesProps>) =>
      Record({
        electricity: false,
        water: false,
        gate: false,
        summerStorageForDockingEquipment: false,
        summerStorageForTrailers: false,
        ...services,
      })();

    test('should return a function that returns a boolean', () => {
      const returnValue = getWinterStorageFilterByValues(defaultValues, createWinterSelectedServices());

      expect(typeof returnValue).toBe('function');
      expect(typeof returnValue(createWinterArea())).toBe('boolean');
      expect(typeof returnValue(winterArea)).toBe('boolean');
    });

    test('should return true if all filter conditions are met', () => {
      const value = getWinterStorageFilterByValues(
        defaultValues,
        createWinterSelectedServices()
      )(createWinterArea(matchOptions));

      expect(value).toBe(true);
    });

    test("should return false if services don't match", () => {
      const customOptions = createAreaOptions({ gate: false });
      const value = getWinterStorageFilterByValues(
        defaultValues,
        createWinterSelectedServices({ gate: true })
      )(createWinterArea(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied width is larger than maxWidth', () => {
      const customOptions = createAreaOptions({ maxWidth: 4.9 });
      const value = getWinterStorageFilterByValues(
        createWinterValues({ boatWidth: '5' }),
        createWinterSelectedServices()
      )(createWinterArea(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied length is larger than maxLength', () => {
      const customOptions = createAreaOptions({ maxLength: 9.0 });
      const value = getWinterStorageFilterByValues(
        createWinterValues({ boatLength: '10' }),
        createWinterSelectedServices()
      )(createWinterArea(customOptions));

      expect(value).toBe(false);
    });
  });
});
