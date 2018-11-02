import { gotoNoBoatPage, clickSubmit, noBoatPageFillForm } from './actions';

describe('No boat', () => {
  it('gives validation errors when form is not filled', () => {
    gotoNoBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
  });

  it('successfully goes to next step', () => {
    gotoNoBoatPage();
    noBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan tiedot');
  });
});
