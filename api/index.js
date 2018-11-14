const express = require('express');
const cors = require('cors');
const jsf = require('json-schema-faker');
const faker = require('faker');
const boatTypes = require('./resources/boat-types.json');
const harbors = require('./resources/harbors.json');

require('dotenv').config({ path: '.env.development.local' });

jsf.extend('faker', () => faker);

const { API_PORT } = process.env;
const app = express();
app.use(cors());

const router = express.Router();

router.get('/boat-types', (req, res) => res.json(boatTypes));
router.get('/harbors', (req, res) => res.json(harbors));
router.post('/reservations', (req, res) =>
  res.json({
    id: 1,
    created_at: 'created_at',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    data: null
  })
);

app.use('/v1', router);
app.listen(API_PORT, () => console.log(`API running on port ${API_PORT}!`));
