import { gotoRegisteredBoatPage, clickSubmit, registeredBoatPageFillForm } from './actions';

describe('Registered boat', () => {
  it('gives validation errors', () => {
    gotoRegisteredBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
  });

  it('takes us to person details page on form fill', () => {
    gotoRegisteredBoatPage();
    registeredBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan tiedot');
  });
});
