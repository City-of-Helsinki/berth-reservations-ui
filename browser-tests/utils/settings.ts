// @ts-ignore
// tslint:disable-next-line:no-var-requires
require('dotenv').config({ path: '.env.development.local' });

const TEST_ENV_URL = 'https://venepaikka.test.kuva.hel.ninja';
const LOCAL_ENV_URL = 'http://localhost:3000';

export const envUrl = (): string => {
  switch (process.env.TEST_ENV) {
    case 'local':
      return LOCAL_ENV_URL;
    case 'test':
      return TEST_ENV_URL;
    default:
      return TEST_ENV_URL;
  }
};
