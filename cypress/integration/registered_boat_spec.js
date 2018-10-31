import { gotoRegisteredBoatPage, clickSubmit, registeredBoatPageFillForm } from './actions';

describe('Registered boat', () => {
  it('gives validation errors when form is not filled', () => {
    gotoRegisteredBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
  });

  it('successfully goes to next step', () => {
    gotoRegisteredBoatPage();
    registeredBoatPageFillForm();
    clickSubmit();

    cy.contains('Hakijan tiedot');
  });
});
