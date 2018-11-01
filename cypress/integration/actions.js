export const clickSubmit = () => {
  cy.get('[type="submit"]').click();
};

export const registeredBoatPageFillForm = () => {
  cy.get('input[name="boat.register_number"]')
    .type('12345')
    .get('select[name="boat.type"]')
    .select('b')
    .get('input[name="boat.width"]')
    .type('5')
    .get('input[name="boat.length"]')
    .type('20')
    .get('input[name="boat.draught"]')
    .type('3')
    .get('input[name="boat.weight"]')
    .type('10500')
    .get('input[name="boat.name"]')
    .type('RMS Titanic')
    .get('input[name="boat.model"]')
    .type('Sinking type');
};

export const personPageFillForm = () => {
  cy.get('input[name="applicant.name.first_name"]')
    .type('Lusso')
    .get('input[name="applicant.name.last_name"]')
    .type('Manatee')
    .get('input[name="applicant.postal.street_address"]')
    .type('Glöö Street 123')
    .get('input[name="applicant.postal.postal_code"]')
    .type('12345')
    .get('input[name="applicant.postal.munacipality"]')
    .type('Manatee Island')
    .get('input[name="applicant.contact.mobile_phone"]')
    .type('+358121231234')
    .get('input[name="applicant.contact.email"]')
    .type('vector@manatees.net');
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
