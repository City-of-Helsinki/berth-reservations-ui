const express = require('express');
const cors = require('cors');
const jsf = require('json-schema-faker');
const faker = require('faker');
const schemas = require('./schemas');

require('dotenv').config({ path: '.env.local' });

jsf.extend('faker', () => faker);

const { API_PORT } = process.env;
const app = express();
app.use(cors());

const replaceImageUrlProvider = arr =>
  arr.map(obj => ({
    ...obj,
    image_file: obj.image_file.replace('lorempixel.com', 'picsum.photos')
  }));

Object.entries(schemas).forEach(([resource, schema]) => {
  app.get(`/api/${resource}`, (req, res) =>
    res.json(replaceImageUrlProvider(jsf.generate(schema)))
  );
});

app.listen(API_PORT, () => console.log(`API running on port ${API_PORT}!`));
