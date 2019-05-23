import { stripLeadingSlash } from './common';

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
});
