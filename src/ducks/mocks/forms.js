import faker from 'faker';

export const developmentValues = {
  sections: {
    applicant: 'private_person',
    boat: 'registered_boat'
  },
  applicant: {
    company: {
      name: faker.company.companyName(),
      businessId: faker.company.bs()
    },
    postal: {
      street_address: faker.address.streetAddress(),
      postal_code: faker.address.zipCode(),
      munacipality: faker.address.city()
    },
    name: {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName()
    },
    contact: {
      mobile_phone: faker.phone.phoneNumber(),
      email: faker.internet.email()
    }
  },
  boat: {
    register_number: faker.random.uuid(),
    type: 'big_boats',
    width: faker.random.number(),
    length: faker.random.number(),
    draught: faker.random.number(),
    weight: faker.random.number(),
    big_ships: {
      propulsion: faker.random.arrayElement(['a', 'b', 'c']),
      hull_material: faker.random.arrayElement(['a', 'b', 'c']),
      usage: faker.lorem.words(),
      time_period: faker.random.arrayElement(['for_now', 'fixed']),
      time_period_from: faker.date.past(),
      time_period_to: faker.date.future()
    },
    name: faker.commerce.productName(),
    model: faker.commerce.product(),
    accessibility: faker.random.boolean()
  },
  MultiCheckbox: faker.random.arrayElement(['inspected', 'insurance', 'agreed']),
  overview: {
    email: faker.random.boolean(),
    sms: faker.random.boolean(),
    guarantee: faker.random.boolean(),
    receivable_boating_info: faker.random.boolean(),
    receivable_fitness_services: faker.random.boolean(),
    receivable_library_services: faker.random.boolean(),
    receivable_other_cultural_services: faker.random.boolean()
  }
};

export const productionValues = {
  select_form_type: {
    applicant_details: 'private_person',
    boat_details: 'registered_boat'
  }
};
