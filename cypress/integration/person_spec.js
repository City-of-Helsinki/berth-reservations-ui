import {
  gotoRegisteredBoat,
  clickSubmit,
  registeredBoatPageFillForm,
  personPageFillForm
} from './actions';

describe('Person', () => {
  it('gives validation errors', () => {
    cy.visit('http://localhost:3000');
    clickSubmit();
    cy.contains('Pakollinen kenttä');
  });

  it('takes us to person details page on form fill', () => {
    cy.visit('http://localhost:3000');
    registeredBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan tiedot');
  });

  it('takes us to overview page on form fill', () => {
    cy.visit('http://localhost:3000');
    registeredBoatPageFillForm();
    clickSubmit();
    personPageFillForm();
    cy.get('[type="submit"]').click();
    cy.contains('Yhteenveto');
  });
});
