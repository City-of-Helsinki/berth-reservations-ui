const boatTypes = require('./boatTypes');

const array = (items, minItems, maxItems) => ({
  type: 'array',
  minItems,
  maxItems,
  items,
  uniqueItems: true
});

const object = properties => ({
  type: 'object',
  properties,
  required: Object.keys(properties)
});

const integer = (minimum, maximum) => ({
  type: 'integer',
  minimum,
  maximum
});

const boolean = () => ({
  type: 'boolean'
});

const fakedString = faked => ({
  type: 'string',
  faker: faked
});

const fakedInteger = faked => ({
  type: 'integer',
  faker: faked
});

const fakedMultilingual = faked =>
  object({
    fi: fakedString(faked),
    sv: fakedString(faked)
  });

const fakedBoatTypes = () =>
  array(
    fakedString({
      'random.arrayElement': [Object.keys(boatTypes)]
    }),
    1,
    4
  );

module.exports = {
  object,
  array,
  boolean,
  integer,
  fakedString,
  fakedInteger,
  fakedMultilingual,
  fakedBoatTypes
};
