import {
  gotoRegisteredBoatPage,
  gotoUnregisteredBoatPage,
  gotoNoBoatPage,
  selectCompanyTab,
  clickSubmit,
  registeredBoatPageFillForm,
  unregisteredBoatPageFillForm,
  noBoatPageFillForm,
  companyPageFillForm,
  overViewPageFillForm,
  checkValuesForRegisteredBoat,
  checkValuesForUnregisteredBoat,
  checkValuesForNoBoat
} from './actions';

describe('Company', () => {
  it('creates an application with registered boat', () => {
    gotoRegisteredBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');

    registeredBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan henkilötiedot');

    selectCompanyTab();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
    companyPageFillForm();
    clickSubmit();

    checkValuesForRegisteredBoat();
    clickSubmit();
    cy.get('input.is-invalid');
    overViewPageFillForm();
    clickSubmit();

    cy.contains('Kiitos hakemuksesta');
  });

  it('creates an appliation with unregistered boat', () => {
    gotoUnregisteredBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');

    unregisteredBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan henkilötiedot');

    selectCompanyTab();
    clickSubmit();
    cy.get('input.is-invalid');
    companyPageFillForm();
    clickSubmit();

    checkValuesForUnregisteredBoat();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
    overViewPageFillForm();
    clickSubmit();

    cy.contains('Kiitos hakemuksesta');
  });

  it('creates an appliation without a boat', () => {
    gotoNoBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');

    noBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan henkilötiedot');

    selectCompanyTab();
    clickSubmit();
    cy.get('input.is-invalid');
    companyPageFillForm();
    clickSubmit();

    checkValuesForNoBoat();
    clickSubmit();
    cy.get('input.is-invalid');
    overViewPageFillForm();
    clickSubmit();

    cy.contains('Kiitos hakemuksesta');
  });
});
