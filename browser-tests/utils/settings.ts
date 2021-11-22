import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development.local' });

export const envUrl = (): string => {
  if (!process.env.BROWSER_TESTS_LOCAL_ENV_URL) {
    throw new Error('No BROWSER_TESTS_LOCAL_ENV_URL specified.');
  }
  return process.env.BROWSER_TESTS_LOCAL_ENV_URL;
};

export const testUserSSN = (): string => {
  if (!process.env.BROWSER_TESTS_SSN) {
    throw new Error('No BROWSER_TESTS_SSN specified.');
  }
  return process.env.BROWSER_TESTS_SSN;
};
