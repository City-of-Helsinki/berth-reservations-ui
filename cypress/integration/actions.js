import values from '../fixtures/values';

export const clickSubmit = () => {
  cy.get('[type="submit"]').click();
};

export const registeredBoatPageFillForm = () => {
  cy.get('input[name="boat.register_number"]')
    .type(values.boat.register_number)
    .get('select[name="boat.type"]')
    .select(values.boat.type.text)
    .get('input[name="boat.width"]')
    .type(values.boat.width)
    .get('input[name="boat.length"]')
    .type(values.boat.length)
    .get('input[name="boat.draught"]')
    .type(values.boat.draught)
    .get('input[name="boat.weight"]')
    .type(values.boat.weight)
    .get('input[name="boat.name"]')
    .type(values.boat.name)
    .get('input[name="boat.model"]')
    .type(values.boat.model);
};

export const unregisteredBoatPageFillForm = () => {
  cy.get('select[name="boat.type"]')
    .select(values.boat.type.text)
    .get('input[name="boat.width"]')
    .type(values.boat.width)
    .get('input[name="boat.length"]')
    .type(values.boat.length)
    .get('input[name="boat.name"]')
    .type(values.boat.name)
    .get('input[name="boat.model"]')
    .type(values.boat.model);
};

export const noBoatPageFillForm = () => {
  cy.get('select[name="boat.type"]')
    .select(values.boat.type.text)
    .get('input[name="boat.width"]')
    .type(values.boat.width)
    .get('input[name="boat.length"]')
    .type(values.boat.length);
};

export const personPageFillForm = () => {
  cy.get('input[name="applicant.name.first_name"]')
    .type(values.applicant.name.first_name)
    .get('input[name="applicant.name.last_name"]')
    .type(values.applicant.name.last_name)
    .get('input[name="applicant.postal.street_address"]')
    .type(values.applicant.postal.street_address)
    .get('input[name="applicant.postal.postal_code"]')
    .type(values.applicant.postal.postal_code)
    .get('input[name="applicant.postal.munacipality"]')
    .type(values.applicant.postal.munacipality)
    .get('input[name="applicant.contact.mobile_phone"]')
    .type(values.applicant.contact.mobile_phone)
    .get('input[name="applicant.contact.email"]')
    .type(values.applicant.contact.email);
};

export const companyPageFillForm = () => {
  cy.get('input[name="applicant.company.name"]')
    .type(values.applicant.company.name)
    .get('input[name="applicant.company.businessId"]')
    .type(values.applicant.company.business_id)
    .get('input[name="applicant.postal.street_address"]')
    .type(values.applicant.postal.street_address)
    .get('input[name="applicant.postal.postal_code"]')
    .type(values.applicant.postal.postal_code)
    .get('input[name="applicant.postal.munacipality"]')
    .type(values.applicant.postal.munacipality)
    .get('input[name="applicant.name.first_name"]')
    .type(values.applicant.name.first_name)
    .get('input[name="applicant.name.last_name"]')
    .type(values.applicant.name.last_name)
    .get('input[name="applicant.contact.mobile_phone"]')
    .type(values.applicant.contact.mobile_phone)
    .get('input[name="applicant.contact.email"]')
    .type(values.applicant.contact.email);
};

export const overViewPageFillForm = () => {
  cy.get('label[for="form.overview.guarantee"]').click();
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
  cy.contains(`Nimi:${values.boat.name}`);
  cy.contains(`Rekisterinumero:${values.boat.register_number}`);
  cy.contains(`Tyyppi:${values.boat.type.text}`);
  cy.contains(`Malli:${values.boat.model}`);
  cy.contains(`Leveys:${values.boat.width}m`);
  cy.contains(`Pituus:${values.boat.length}m`);
  cy.contains(`Syväys:${values.boat.draught}m`);
  cy.contains(`Paino:${values.boat.weight}kg`);
  cy.contains(`${values.applicant.name.first_name} ${values.applicant.name.last_name}`);
  cy.contains(values.applicant.contact.email);
};

export const checkValuesForUnregisteredBoat = () => {
  cy.contains(`Nimi:${values.boat.name}`);
  cy.contains(`Tyyppi:${values.boat.type.text}`);
  cy.contains(`Malli:${values.boat.model}`);
  cy.contains(`Leveys:${values.boat.width}m`);
  cy.contains(`Pituus:${values.boat.length}m`);
  cy.contains(`${values.applicant.name.first_name} ${values.applicant.name.last_name}`);
  cy.contains(values.applicant.contact.email);
};

export const checkValuesForNoBoat = () => {
  cy.contains(`Tyyppi:${values.boat.type.text}`);
  cy.contains(`Leveys:${values.boat.width}m`);
  cy.contains(`Pituus:${values.boat.length}m`);
  cy.contains(`${values.applicant.name.first_name} ${values.applicant.name.last_name}`);
  cy.contains(values.applicant.contact.email);
};
