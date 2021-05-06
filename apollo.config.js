// eslint-disable-next-line
require('dotenv').config({ path: '.env.development.local' });

module.exports = {
  client: {
    service: {
      name: 'venepaikka-federation',
      url: process.env.REACT_APP_API_URL,
    },
  },
};
