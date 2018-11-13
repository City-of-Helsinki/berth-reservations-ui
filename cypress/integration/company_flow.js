import values from '../fixtures/values';
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
    cy.contains('Pakollinen kenttä');
    companyPageFillForm();
    clickSubmit();

    checkValuesForUnregisteredBoat();
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
    cy.contains('Pakollinen kenttä');
    companyPageFillForm();
    clickSubmit();

    checkValuesForNoBoat();
    clickSubmit();

    cy.contains('Kiitos hakemuksesta');
  });
});
