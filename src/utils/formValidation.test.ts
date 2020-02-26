import validator, { mustNotExceedTwoDecimals } from './formValidation';

describe('formValidation', () => {
  describe('mustNotExceedTwoDecimals', () => {
    test('should return undefined if the value has no more than two decimals', () => {
      expect(mustNotExceedTwoDecimals('1000.00')).toBeUndefined();
    });

    test('should return an error message if the value has more than two decimals', () => {
      expect(mustNotExceedTwoDecimals('1000.000')).toMatchSnapshot();
    });

    test('should return an error message if the value has no digits after the decimal point', () => {
      expect(mustNotExceedTwoDecimals('1000.')).toMatchSnapshot();
    });
  });

  describe('validator', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn3 = jest.fn();

    beforeEach(() => {
      jest.resetAllMocks();
    });

    test('should run all the provided functions on the provided value', () => {
      const value = 'foo';
      validator(fn1, fn2, fn3)(value);

      expect(fn1).toHaveBeenCalledWith(value);
      expect(fn2).toHaveBeenCalledWith(value);
      expect(fn3).toHaveBeenCalledWith(value);
    });

    test('it accepts null instead of a function', () => {
      expect(() => validator(fn1, null, fn3)('foo')).not.toThrowError();
    });

    test('it returns undefined if all the provided functions return undefined', () => {
      expect(validator(fn1, fn2, fn3)('foo')).toBeUndefined();
    });

    test('it returns the return value of the first provided function', () => {
      const err1 = 'err1';
      const err2 = 'err2';
      const withErrFn1 = jest.fn().mockReturnValue(err1);
      const withErrFn2 = jest.fn().mockReturnValue(err2);

      expect(validator(withErrFn1, withErrFn2)('foo')).toBe(err1);
    });
  });
});
