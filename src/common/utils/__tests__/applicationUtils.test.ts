import { List } from 'immutable';

import { createBerth } from '../../../__fixtures__/berthFixture';
import { getSelectedResources, isResourceSelected, stringToFloat } from '../applicationUtils';

describe('utils/applicationUtils', () => {
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
