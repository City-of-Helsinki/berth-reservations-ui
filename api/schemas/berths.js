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

const integer = (minimum, maximum) => ({
  type: 'integer',
  minimum,
  maximum
});

// 24666948 60116468
// 25234917 60243053
const fakedCoordinates = () => array([integer(60116468, 60243053), integer(24666948, 25234917)]);

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
    id: fakedString('random.uuid'),
    name: fakedMultilingual('address.streetName'),
    street_address: fakedMultilingual('address.streetAddress'),
    municipality: fakedMultilingual('address.city'),
    zip_code: fakedString('address.zipCode'),
    phone: fakedString('phone.phoneNumber'),
    email: fakedString('internet.email'),
    www_url: fakedString('internet.url'),
    location: object({
      type: fakedString('address.city'),
      coordinates: fakedCoordinates()
    }),
    image_file: fakedString('image.imageUrl'),
    image_link: fakedString('internet.url'),
    mooring: boolean(),
    electricity: boolean(),
    water: boolean(),
    waste_collection: boolean(),
    gate: boolean(),
    lighting: boolean(),
    number_of_places: integer(10, 50),
    maximum_depth: integer(0, 10),
    maximum_width: integer(0, 10),
    maximum_length: integer(0, 10)
  }),
  20,
  30
);
