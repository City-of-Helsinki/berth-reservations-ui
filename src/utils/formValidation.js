export const mustBePresent = value => (value ? undefined : 'validation.message.required');
export const mustBeNumber = value =>
  isNaN(value) ? 'validation.message.must_be_number' : undefined;

export default (...fns) => x => fns.reduce((v, f) => (f ? v || f(x) : v), undefined);
