const array = (items, minItems, maxItems) => ({
  type: 'array',
  minItems,
  maxItems,
  items
});

const object = properties => ({
  type: 'object',
  properties,
  required: Object.keys(properties)
});

const fakedString = faked => ({
  type: 'string',
  faker: faked
});

const fakedInteger = faked => ({
  type: 'integer',
  faker: faked
});
const integer = (minimum, maximum) => ({
  type: 'integer',
  minimum,
  maximum
});

const boolean = () => ({
  type: 'boolean'
});

const fakedMultilingual = faked =>
  object({
    fi: fakedString(faked),
    sv: fakedString(faked)
  });

module.exports = array(
  object({
    name: fakedMultilingual('address.streetName'),
    street_address: fakedMultilingual('address.streetAddress'),
    municipality: fakedMultilingual('address.city'),
    zip_code: fakedString('address.zipCode'),
    phone: fakedString('phone.phoneNumber'),
    email: fakedString('internet.email'),
    www_url: fakedString('internet.url'),
    location: object({
      type: fakedString('address.city'),
      coordinates: array([fakedInteger('address.latitude'), fakedInteger('address.longitude')])
    }),
    image_file: fakedMultilingual('image.imageUrl'),
    image_link: fakedMultilingual('internet.url'),
    mooring: boolean(),
    electricity: boolean(),
    water: boolean(),
    waste_collection: boolean(),
    gate: boolean(),
    lighting: boolean(),
    number_of_places: integer(10, 50),
    maximum_depth: integer(100, 1000),
    maximum_width: integer(100, 1000)
  }),
  20,
  30
);
