const utils = require('../utils');

module.exports = utils.array(
  utils.object({
    identifier: utils.fakedString('random.uuid'),
    suitable_boat_types: utils.fakedBoatTypes(),
    name: utils.fakedMultilingual('address.streetName'),
    street_address: utils.fakedMultilingual('address.streetAddress'),
    municipality: utils.fakedMultilingual('address.city'),
    zip_code: utils.fakedString('address.zipCode'),
    phone: utils.fakedString('phone.phoneNumber'),
    email: utils.fakedString('internet.email'),
    www_url: utils.fakedString('internet.url'),
    location: utils.object({
      type: utils.fakedString('address.city'),
      coordinates: utils.array([
        utils.fakedInteger('address.latitude'),
        utils.fakedInteger('address.longitude')
      ])
    }),
    image: utils.fakedString('image.imageUrl'),
    mooring: utils.boolean(),
    electricity: utils.boolean(),
    water: utils.boolean(),
    waste_collection: utils.boolean(),
    gate: utils.boolean(),
    lighting: utils.boolean(),
    number_of_places: utils.integer(10, 50),
    maximum_depth: utils.integer(100, 1000),
    maximum_width: utils.integer(100, 1000)
  }),
  20,
  30
);
