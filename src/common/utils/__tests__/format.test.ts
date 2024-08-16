import { formatDate, formatDimension, formatPercentage, formatPrice, formatWeight } from '../format';

describe('format', () => {
  describe('formatDimension', () => {
    it('should add at least one fraction number', () => {
      expect(formatDimension(1, 'fi')).toMatch('1,0');
    });

    it('should add "m" unit to to the supplied value', () => {
      expect(formatDimension(1, 'fi')).toMatch('m');
    });

    it('should return "-" if the value is null', () => {
      expect(formatDimension(null, 'fi')).toBe('-');
      expect(formatDimension(null, 'fi')).toBe('-');
    });
  });

  describe('formatWeight', () => {
    it('should add "kg" unit to to the supplied value', () => {
      expect(formatWeight(1, 'fi')).toMatch('kg');
    });

    it('should return "-" if the value is undefined/null', () => {
      expect(formatWeight(null, 'fi')).toBe('-');
      expect(formatWeight(null, 'fi')).toBe('-');
    });
  });

  describe('formatDate', () => {
    it('should format the date according to the supplied locale', () => {
      expect(formatDate('2018-11-28T12:26:28.146227+00:00', 'fi')).toMatchSnapshot();
    });

    it('should include time info when the third argument is true', () => {
      expect(formatDate('2018-11-28T12:26:28.146227+00:00', 'fi', true)).toMatchSnapshot();
    });
  });

  describe('formatPrice', () => {
    it('should add at least two decimals', () => {
      expect(formatPrice(1, 'fi')).toMatch('1,00');
    });

    it('should add the currency unit to to the supplied value', () => {
      expect(formatPrice(1, 'fi')).toMatch('€');
    });

    it('should format prices with percentage correctly', () => {
      expect(formatPrice(1, 'fi', 0.5)).toEqual('0.5%  1,00 €');
    });
  });

  describe('formatPercentage', () => {
    it('should add the percentage sign to to the supplied value', () => {
      expect(formatPercentage(1, 'fi')).toMatch('%');
    });

    // \u00A0 = No-Break Space (NBSP)
    it.each<[number, string, string]>([
      // Finnish
      [0, 'fi', '0\u00A0%'],
      [1, 'fi', '1\u00A0%'],
      [1.23, 'fi', '1,23\u00A0%'],
      [9, 'fi', '9\u00A0%'],
      [12.3456789, 'fi', '12,346\u00A0%'],
      [15, 'fi', '15\u00A0%'],
      [24, 'fi', '24\u00A0%'],
      [25.5, 'fi', '25,5\u00A0%'],
      [31.26, 'fi', '31,26\u00A0%'],
      [42.347, 'fi', '42,347\u00A0%'],
      // Swedish
      [0, 'sv', '0\u00A0%'],
      [1, 'sv', '1\u00A0%'],
      [1.23, 'sv', '1,23\u00A0%'],
      [9, 'sv', '9\u00A0%'],
      [12.3456789, 'sv', '12,346\u00A0%'],
      [15, 'sv', '15\u00A0%'],
      [24, 'sv', '24\u00A0%'],
      [25.5, 'sv', '25,5\u00A0%'],
      [31.26, 'sv', '31,26\u00A0%'],
      [42.347, 'sv', '42,347\u00A0%'],
      // English
      [0, 'en', '0%'],
      [1, 'en', '1%'],
      [1.23, 'en', '1.23%'],
      [9, 'en', '9%'],
      [12.3456789, 'en', '12.346%'],
      [15, 'en', '15%'],
      [24, 'en', '24%'],
      [25.5, 'en', '25.5%'],
      [31.26, 'en', '31.26%'],
      [42.347, 'en', '42.347%'],
    ])('formatPercentage(%s, "%s") == "%s"', (value: number, locale: string, expectedResult: string) => {
      expect(formatPercentage(value, locale)).toEqual(expectedResult);
    });
  });
});
