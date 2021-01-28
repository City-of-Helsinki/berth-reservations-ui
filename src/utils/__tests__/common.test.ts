import { genValidSelector, stripLeadingSlash } from '../common';

describe('utils/common', () => {
  describe('stripLeadingSlash', () => {
    test('should strip the leading slash from the provided string', () => {
      const path = '/berths';
      const actualValue = stripLeadingSlash(path);
      expect(actualValue).toBe('berths');
    });

    test("should return the same string if it doen't have a leading slash", () => {
      const path = 'berths';
      const actualValue = stripLeadingSlash(path);
      expect(actualValue).toBe(path);
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
