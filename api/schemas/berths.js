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

/*
  "suitable_boat_types": [
      "dinghy",
      "rowing_boat",
      "motorboat_outboard"
  ],
  "municipality": {
      "fi": "Helsinki",
      "sv": "Helsingfors"
  },
  "image": "https://www.hel.fi/wps/wcm/connect/1a348a75-844a-4611-9f40-1812c6101533/1/ruoholahden_venesatama_53.jpg?MOD=AJPERES&CVID=",
  "identifier": "test",
  "zip_code": null,
  "phone": null,
  "email": null,
  "www_url": null,
  "mooring": false,
  "electricity": false,
  "water": false,
  "waste_collection": false,
  "gate": false,
  "lighting": false,
  "number_of_places": null,
  "maximum_width": null,
  "maximum_length": null,
  "maximum_depth": null,
  "location": {
      "type": "Point",
      "coordinates": [
          25.1677895,
          60.2528454
      ]
  },
  "name": {
      "fi": "Airoranta"
  },
  "street_address": {
      "fi": "testikatu 1"
  }
},
{
  "suitable_boat_types": [
      "dinghy",
      "rowing_boat",
      "motorboat_outboard"
  ],
  "municipality": {
      "fi": "Helsinki",
      "sv": "Helsingfors"
  },
  "image": "https://www.hel.fi/wps/wcm/connect/1a348a75-844a-4611-9f40-1812c6101533/1/ruoholahden_venesatama_53.jpg?MOD=AJPERES&CVID=",
  "identifier": "test",
  "zip_code": null,
  "phone": null,
  "email": null,
  "www_url": null,
  "mooring": false,
  "electricity": false,
  "water": false,
  "waste_collection": false,
  "gate": false,
  "lighting": false,
  "number_of_places": null,
  "maximum_width": null,
  "maximum_length": null,
  "maximum_depth": null,
  "location": {
      "type": "Point",
      "coordinates": [
          25.1677895,
          60.2528454
      ]
  },
  "name": {
      "fi": "Vuosaaren satama"
  },
  "street_address": {
      "fi": "testikatu 1"
  }
}
*/
