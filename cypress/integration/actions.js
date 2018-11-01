import values from '../fixtures/values';

export const clickSubmit = () => {
  cy.get('[type="submit"]').click();
};

export const registeredBoatPageFillForm = () => {
  cy.get('input[name="boat.register_number"]')
    .type(values.boat.register_number)
    .get('select[name="boat.type"]')
    .select(values.boat.type)
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
    .select(values.boat.type)
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
    .select(values.boat.type)
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

export const gotoRegisteredBoatPage = () => {
  cy.visit('http://localhost:3000');
  cy.get('label[for="boat_type.selector.registered_boat"]').click();
};

export const gotoUnregisteredBoatPage = () => {
  cy.visit('http://localhost:3000');
  cy.get('label[for="boat_type.selector.unregistered_boat"]').click();
};

export const gotoNoBoatPage = () => {
  cy.visit('http://localhost:3000');
  cy.get('label[for="boat_type.selector.no_boat"]').click();
};

export const gotoPersonPage = () => {
  cy.visit('http://localhost:3000');
  registeredBoatPageFillForm();
  clickSubmit();
};

export const gotoOverviewPage = () => {
  gotoRegisteredBoatPage();
  registeredBoatPageFillForm();
  clickSubmit();
  personPageFillForm();
  clickSubmit();
};
