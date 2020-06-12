export const mustBePresent = (value: any): string | undefined =>
  value ? undefined : 'validation.message.required';

export const mustBeNumber = (value: any): string | undefined =>
  isNaN(value) ? 'validation.message.must_be_number' : undefined;

export const mustBePositiveNumber = (value: number): string | undefined => {
  if (isNaN(value)) {
    return 'validation.message.must_be_number';
  }
  if (value < 0) {
    return 'validation.message.must_be_positive_number';
  }

  return undefined;
};

export const mustNotExceedTwoDecimals = (value: string): string | undefined => {
  const regex = /^-?\d+(\.\d{1,2})?$/;
  if (regex.test(value)) {
    return undefined;
  }
  return 'validation.message.invalid_value';
};

export const mustBeLessThan = (limit: number) => (value: string): string | undefined => {
  if (Number(value) >= limit) {
    return 'validation.message.must_be_less';
  }
  return undefined;
};

export const mustBePhoneNumber = (value: string): string | undefined => {
  const phoneRe = /^([0-9\(\)\s\+\-])+$/im;
  if (phoneRe.test(value)) {
    return undefined;
  }
  return 'validation.message.must_be_phone_number';
};

export const mustBeEmail = (value: any): any => {
  const emailRe = /^.*\@.*\..*$/im;
  if (emailRe.test(value)) {
    return undefined;
  }
  return 'validation.message.must_be_email';
};

export default <T>(...fns: (((...args: any[]) => T | undefined) | null)[]) => (
  value: string
): T | undefined => {
  let validated: T | undefined;

  fns.forEach((fn) => {
    if (!validated && fn) {
      validated = fn(value);
    }
  });

  return validated;
};
