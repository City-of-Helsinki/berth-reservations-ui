import { gotoPersonPage, clickSubmit, personPageFillForm } from './actions';

describe('Person', () => {
  it('gives validation errors when form is not filled', () => {
    gotoPersonPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
  });

  it('successfully goes to next step', () => {
    gotoPersonPage();
    personPageFillForm();
    clickSubmit();
    cy.contains('Yhteenveto');
  });
});
