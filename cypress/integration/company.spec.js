import { gotoCompanyPage, clickSubmit, companyPageFillForm } from './actions';

describe('Company', () => {
  it('gives validation errors when form is not filled', () => {
    gotoCompanyPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
  });

  it('successfully goes to next step', () => {
    gotoCompanyPage();
    companyPageFillForm();
    clickSubmit();
    cy.contains('Yhteenveto');
  });
});
