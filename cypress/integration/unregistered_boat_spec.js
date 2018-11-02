import { gotoUnregisteredBoatPage, clickSubmit, unregisteredBoatPageFillForm } from './actions';

describe('Unegistered boat', () => {
  it('gives validation errors when form is not filled', () => {
    gotoUnregisteredBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
  });

  it('successfully goes to next step', () => {
    gotoUnregisteredBoatPage();
    unregisteredBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan tiedot');
  });
});
