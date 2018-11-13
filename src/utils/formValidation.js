// @flow

export const mustBePresent = (value: any): any =>
  value ? undefined : 'validation.message.required';
export const mustBeNumber = (value: any): any =>
  Number.isNaN(value) ? 'validation.message.must_be_number' : undefined;

export default (f1: Function | null, f2: Function | null) => (x: any): any => {
  let validated;
  if (f1) {
    validated = f1(x);
  }
  if (!validated && f2) {
    validated = f2(x);
  }
  return validated;
};
