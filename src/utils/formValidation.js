// @flow
export const mustBePresent = (value: any) => (value ? undefined : 'validation.message.required');
export const mustBeNumber = (value: any) =>
  Number.isNaN(value) ? 'validation.message.must_be_number' : undefined;

export default (...fns: Array<Function | null>) => (x: any) =>
  fns.reduce((v, f) => (f ? v || f(x) : v), undefined);
