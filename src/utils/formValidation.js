// @flow

export const mustBePresent = (value: any): any =>
  value || value === '' ? undefined : 'validation.message.required';
export const mustBeNumber = (value: any): any =>
  Number.isNaN(value) ? 'validation.message.must_be_number' : undefined;

export const mustBeBefore = before => (value: any): any => {
  debugger;
  return typeof value === 'object';
};
export const mustBeAfter = before => (value: any): any => typeof value === 'object';

export default (f1: Function | null, f2: Function | null) => (x: any): any => {
  let validated;
  console.debug(x);
  if (f1) {
    validated = f1(x);
  }
  if (!validated && f2) {
    validated = f2(x);
  }
  return validated;
};
