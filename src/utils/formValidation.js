// @flow
export const mustBePresent = (value: string): void | string =>
  value ? undefined : 'validation.message.required';
export const mustBeNumber = (value: string | number): void | string =>
  Number.isNaN(value) ? 'validation.message.must_be_number' : undefined;

export default (...fns: Array<Function | null>) => (x: string | number) =>
  fns.reduce((v, f) => (f ? v || f(x) : v), undefined);
