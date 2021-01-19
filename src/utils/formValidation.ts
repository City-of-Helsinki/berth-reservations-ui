export const stringHasNoExtraWhitespace = (value: string): boolean =>
  value.charAt(0) !== ' ' && value.charAt(value.length - 1) !== ' ';

export const mustBePresent = (value: unknown): string | undefined => {
  const errorMsg = 'validation.message.required';

  if (typeof value === 'string') return value.trim().length ? undefined : errorMsg;
  if (value) return undefined;

  return errorMsg;
};

export const mustBeNames = (maxNames: number) => (value: string): string | undefined => {
  const regexString = `^([\\p{Script_Extensions=Latin}-]+\\s*){1,${maxNames}}$`;
  const regex = RegExp(regexString, 'u');

  if (regex.test(value) && stringHasNoExtraWhitespace(value)) {
    return undefined;
  }
  return 'validation.message.invalid_value';
};

export const mustBeCompanyName = (value: string): string | undefined => {
  const regex = /^([a-zA-ZåäöÅÄÖ0-9- ]+)$/;
  if (regex.test(value) && stringHasNoExtraWhitespace(value)) {
    return undefined;
  }
  return 'validation.message.invalid_value';
};

export const mustBeAddress = (value: string): string | undefined => {
  const regex = /^([a-zA-ZåäöÅÄÖ0-9-/.,() ]+)$/;
  if (regex.test(value) && stringHasNoExtraWhitespace(value)) {
    return undefined;
  }
  return 'validation.message.invalid_value';
};

export const mustBePostalCode = (value: string): string | undefined => {
  const regex = /^([0-9]{5})$/;
  if (regex.test(value)) {
    return undefined;
  }
  return 'validation.message.invalid_value';
};

export const mustBeNumber = (value: string): string | undefined =>
  isNaN(parseFloat(value)) ? 'validation.message.must_be_number' : undefined;

export const mustBePositiveNumber = (value: string): string | undefined => {
  if (isNaN(parseFloat(value))) {
    return 'validation.message.must_be_number';
  }
  if (parseFloat(value) < 0) {
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
  if (parseFloat(value) >= limit) {
    return 'validation.message.must_be_less';
  }
  return undefined;
};

export const mustBePhoneNumber = (value: string): string | undefined => {
  const phoneRe = /^([0-9()\s+-])+$/im;
  if (phoneRe.test(value)) {
    return undefined;
  }
  return 'validation.message.must_be_phone_number';
};

export const mustBeEmail = (value: string): string | undefined => {
  const emailRe = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailRe.test(value.toLowerCase())) {
    return undefined;
  }
  return 'validation.message.must_be_email';
};

export default <T>(...fns: (((...args: string[]) => T | undefined) | null)[]) => (value: string): T | undefined => {
  let validated: T | undefined;

  fns.forEach((fn) => {
    if (!validated && fn) {
      validated = fn(value);
    }
  });

  return validated;
};

const ssnValidationTable = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
];

const validateSsn = (number: number, checkCharacter: string): boolean => {
  return checkCharacter === ssnValidationTable[number % 31];
};

export const mustBeSsn = (value: string): string | undefined => {
  const ssnRe = /^([0-9]{6})([\\+\-A])([0-9]{3})([0-9A-FHJ-NPR-Y])$/;
  if (!ssnRe.test(value)) {
    return 'validation.message.must_be_ssn';
  }

  const groups = value.match(ssnRe) ?? [];
  const number = parseInt(`${groups[1]}${groups[3]}`, 10);
  const checkCharacter = groups[4];

  if (!validateSsn(number, checkCharacter)) {
    return 'validation.message.must_be_ssn';
  }

  return undefined;
};

export const mustBeBusinessId = (value: string): string | undefined => {
  const regex = /^[0-9]{7}-[0-9]$/;
  if (regex.test(value)) {
    return undefined;
  }
  return 'validation.message.invalid_value';
};

export const mustBeBoatRegistrationNumber = (value: string): string | undefined => {
  const regex = /^([PEL][0-9]{5,10})|([A-DF-KOQ-Z][0-9]{1,7})$/;
  if (regex.test(value)) {
    return undefined;
  }
  return 'validation.message.invalid_value';
};
