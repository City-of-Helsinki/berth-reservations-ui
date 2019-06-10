require('dotenv').config({ path: '.env.development.local' });

module.exports = {
  client: {
    service: {
      name: 'venepaikka-api',
      url: process.env.REACT_APP_API_URL
    }
  }
};
