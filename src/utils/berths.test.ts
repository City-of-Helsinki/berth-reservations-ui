import { List, Record } from 'immutable';

import { berth, createBerth } from '../__fixtures__/berthFixture';
import { createBerthValues, createWinterValues } from '../__fixtures__/formValuesFixture';
import { createWinterArea, winterArea } from '../__fixtures__/winterStorageFixture';
import {
  convertCmToM,
  getBerthFilterByValues,
  getSelectedResources,
  getWinterStorageFilterByValues,
  isResourceSelected,
  stringToFloat,
} from './berths';
import { SelectedServicesProps, SelectedWinterServicesProps } from '../types/services';

describe('utils/berths', () => {
  describe('convertCmToM', () => {
    test('should convert centimeters to meters', () => {
      expect(convertCmToM(100)).toBe(1);
    });

    test('should return null when the supplied parameter is null', () => {
      expect(convertCmToM(null)).toBeNull();
    });

    test('should return undefined when the parameter is undefined', () => {
      expect(convertCmToM()).toBeUndefined();
    });
  });

  describe('getBerthFilterByValues', () => {
    const defaultValues = createBerthValues({
      boatLength: '10.2',
      boatType: '8',
      boatWidth: '4.2',
    });

    const matchOptions = {
      maximumLength: 1100,
      suitableBoatTypes: [],
      maximumWidth: 500,
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

    test('should return false if the supplied width is larger than maximumWidth after converting to cm', () => {
      const customOptions = createBerthOptions({ maximumWidth: 490 });
      const value = getBerthFilterByValues(
        createBerthValues({ boatWidth: '5' }),
        createSelectedServices()
      )(createBerth(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied length is larger than maximumLength after converting to cm', () => {
      const customOptions = createBerthOptions({ maximumLength: 900 });
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

  describe('getWinterStorageFilterByValues', () => {
    const defaultValues = createWinterValues({
      boatLength: '10.2',
      boatType: '8',
      boatWidth: '4.2',
    });

    const matchOptions = {
      maximumLength: 1100,
      maximumWidth: 500,
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
        repairArea: false,
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

    test('should return false if the supplied width is larger than maximumWidth after converting to cm', () => {
      const customOptions = createAreaOptions({ maximumWidth: 490 });
      const value = getWinterStorageFilterByValues(
        createWinterValues({ boatWidth: '5' }),
        createWinterSelectedServices()
      )(createWinterArea(customOptions));

      expect(value).toBe(false);
    });

    test('should return false if the supplied length is larger than maximumLength after converting to cm', () => {
      const customOptions = createAreaOptions({ maximumLength: 900 });
      const value = getWinterStorageFilterByValues(
        createWinterValues({ boatLength: '10' }),
        createWinterSelectedServices()
      )(createWinterArea(customOptions));

      expect(value).toBe(false);
    });
  });

  describe('getSelectedResources', () => {
    const berthA = createBerth({ id: 'a' });
    const berthB = createBerth({ id: 'b' });
    const berthC = createBerth({ id: 'c' });
    const allBerths = List([berthA, berthB, berthC]);

    test('return a List of resources of the matching ids', () => {
      const selectedIds = List(['b', 'a']);
      const berths = getSelectedResources(selectedIds, allBerths);

      expect(berths).toBeInstanceOf(List);
      expect(berths.size).toBe(2);
    });

    test('returned List should have the same order as the corresponding ids', () => {
      const selectedIds = List(['b', 'a']);
      const berths = getSelectedResources(selectedIds, allBerths);

      expect(berths.getIn(['0', 'id'])).toBe(selectedIds.get(0));
      expect(berths.getIn(['1', 'id'])).toBe(selectedIds.get(1));
    });

    test('ignore invalid ids', () => {
      const selectedIds = List(['foo']);
      const berths = getSelectedResources(selectedIds, allBerths);

      expect(berths.size).toBe(0);
    });
  });

  describe('isResourceSelected', () => {
    const berthIdA = 'a';
    const berthIdB = 'b';
    const berthIdC = 'c';
    const selectedBerths = List([berthIdA, berthIdB]);

    test('should return true if the supplied berth is in the selected list', () => {
      expect(isResourceSelected(selectedBerths, berthIdA)).toBe(true);
    });

    test('should return false if the supplied berth is not in the selected list', () => {
      expect(isResourceSelected(selectedBerths, berthIdC)).toBe(false);
    });
  });

  describe('stringToFloat', () => {
    test('should return the corresponding number of the provided string', () => {
      expect(stringToFloat('1.5')).toBe(1.5);
      expect(stringToFloat('1,5')).toBe(1.5);
    });

    test('should return undefined when the provided value cannot be converted to a valid number', () => {
      expect(stringToFloat('random')).toBeUndefined();
    });

    test('should return undefined when the provided value is an empty string', () => {
      expect(stringToFloat('')).toBeUndefined();
    });
  });
});
