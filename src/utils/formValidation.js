// @flow

export const mustBePresent = value => (value ? undefined : 'Required');
export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);

export default (...fns) => x => fns.reduce((v, f) => (f ? f(v) : v), x);
