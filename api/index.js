const express = require('express');
const cors = require('cors');
const jsf = require('json-schema-faker');
const faker = require('faker');
const schemas = require('./schemas');
const boatTypes = require('./boatTypes');

require('dotenv').config({ path: '.env.development.local' });

jsf.extend('faker', () => faker);

const { API_PORT } = process.env;
const app = express();
app.use(cors());

const replaceImageUrlProvider = arr =>
  arr.map(obj => ({
    ...obj,
    image_file: obj.image.replace('lorempixel.com', 'picsum.photos'),
    location: {
      type: obj.location.type,
      coordinates: obj.location.coordinates.map(a => a / 1000000)
    }
  }));

Object.entries(schemas).forEach(([resource, schema]) => {
  app.get(`/api/${resource}`, (req, res) =>
    res.json(replaceImageUrlProvider(jsf.generate(schema)))
  );
});

app.get(`/api/boat-types`, (req, res) => res.json(boatTypes));

app.listen(API_PORT, () => console.log(`API running on port ${API_PORT}!`));
