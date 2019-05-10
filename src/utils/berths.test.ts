import { List } from 'immutable';

import { createBerth } from '../__fixtures__/BerthFixture';
import { genValidSelector, isBerthSelected } from './berths';

describe('utils/berths', () => {
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
