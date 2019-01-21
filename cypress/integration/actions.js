import values from '../fixtures/values';

export const clickSubmit = () => {
  cy.get('[type="submit"]').click();
};

export const registeredBoatPageFillForm = () => {
  cy.get('input[name="boat_registration_number"]')
    .type(values.boat_registration_number)
    .get('select[name="boat_type"]')
    .select(values.boat_type.text)
    .get('input[name="boat_width"]')
    .type(values.boat_width)
    .get('input[name="boat_length"]')
    .type(values.boat_length)
    .get('input[name="boat_draught"]')
    .type(values.boat_draught)
    .get('input[name="boat_weight"]')
    .type(values.boat_weight)
    .get('input[name="boat_name"]')
    .type(values.boat_name)
    .get('input[name="boat_model"]')
    .type(values.boat_model);
};

export const unregisteredBoatPageFillForm = () => {
  cy.get('select[name="boat_type"]')
    .select(values.boat_type.text)
    .get('input[name="boat_width"]')
    .type(values.boat_width)
    .get('input[name="boat_length"]')
    .type(values.boat_length)
    .get('input[name="boat_name"]')
    .type(values.boat_name)
    .get('input[name="boat_model"]')
    .type(values.boat_model);
};

export const noBoatPageFillForm = () => {
  cy.get('select[name="boat_type"]')
    .select(values.boat_type.text)
    .get('input[name="boat_width"]')
    .type(values.boat_width)
    .get('input[name="boat_length"]')
    .type(values.boat_length);
};

export const personPageFillForm = () => {
  cy.get('input[name="first_name"]')
    .type(values.first_name)
    .get('input[name="last_name"]')
    .type(values.last_name)
    .get('input[name="address"]')
    .type(values.address)
    .get('input[name="zip_code"]')
    .type(values.zip_code)
    .get('input[name="municipality"]')
    .type(values.municipality)
    .get('input[name="phone_number"]')
    .type(values.phone_number)
    .get('input[name="email"]')
    .type(values.email);
};

export const companyPageFillForm = () => {
  cy.get('input[name="company_name"]')
    .type(values.company_name)
    .get('input[name="businessId"]')
    .type(values.business_id)
    .get('input[name="address"]')
    .type(values.address)
    .get('input[name="zip_code"]')
    .type(values.zip_code)
    .get('input[name="municipality"]')
    .type(values.municipality)
    .get('input[name="first_name"]')
    .type(values.first_name)
    .get('input[name="last_name"]')
    .type(values.last_name)
    .get('input[name="phone_number"]')
    .type(values.phone_number)
    .get('input[name="email"]')
    .type(values.email);
};

export const overViewPageFillForm = () => {
  cy.get('label[for="form.information_accuracy_confirmed"]').click();
};

export const gotoRegisteredBoatPage = () => {
  cy.visit('http://localhost:5000/fi/form/registered_boat');
};

export const gotoUnregisteredBoatPage = () => {
  cy.visit('http://localhost:5000/fi/form/unregistered_boat');
};

export const gotoNoBoatPage = () => {
  cy.visit('http://localhost:5000/fi/form/no_boat');
};

export const selectCompanyTab = () => {
  cy.get('#company_selection').click();
};

export const checkValuesForRegisteredBoat = () => {
  cy.contains(`Nimi:${values.boat_name}`);
  cy.contains(`Rekisterinumero:${values.boat_registration_number}`);
  cy.contains(`Tyyppi:${values.boat_type.text}`);
  cy.contains(`Malli:${values.boat_model}`);
  cy.contains(`Leveys:${values.boat_width}m`);
  cy.contains(`Pituus:${values.boat_length}m`);
  cy.contains(`Syväys:${values.boat_draught}m`);
  cy.contains(`Paino:${values.boat_weight}kg`);
  cy.contains(`${values.first_name} ${values.last_name}`);
  cy.contains(values.email);
};

export const checkValuesForUnregisteredBoat = () => {
  cy.contains(`Nimi:${values.boat_name}`);
  cy.contains(`Tyyppi:${values.boat_type.text}`);
  cy.contains(`Malli:${values.boat_model}`);
  cy.contains(`Leveys:${values.boat_width}m`);
  cy.contains(`Pituus:${values.boat_length}m`);
  cy.contains(`${values.first_name} ${values.last_name}`);
  cy.contains(values.email);
};

export const checkValuesForNoBoat = () => {
  cy.contains(`Tyyppi:${values.boat_type.text}`);
  cy.contains(`Leveys:${values.boat_width}m`);
  cy.contains(`Pituus:${values.boat_length}m`);
  cy.contains(`${values.first_name} ${values.last_name}`);
  cy.contains(values.email);
};
