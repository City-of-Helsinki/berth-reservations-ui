import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development.local' });

export const envUrl = (): string => {
  if (!process.env.BROWSER_TESTS_LOCAL_ENV_URL) {
    throw new Error('No BROWSER_TESTS_LOCAL_ENV_URL specified.');
  }
  return process.env.BROWSER_TESTS_LOCAL_ENV_URL;
};

export const testUsername = (): string => {
  if (!process.env.BROWSER_TESTS_UID) {
    throw new Error('No BROWSER_TESTS_UID specified.');
  }
  return process.env.BROWSER_TESTS_UID;
};

export const testUserPassword = (): string => {
  if (!process.env.BROWSER_TESTS_PWD) {
    throw new Error('No BROWSER_TESTS_PWD specified.');
  }
  return process.env.BROWSER_TESTS_PWD;
};
