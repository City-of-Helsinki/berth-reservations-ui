import {
  gotoRegisteredBoatPage,
  gotoUnregisteredBoatPage,
  gotoNoBoatPage,
  clickSubmit,
  registeredBoatPageFillForm,
  unregisteredBoatPageFillForm,
  noBoatPageFillForm,
  personPageFillForm,
  overViewPageFillForm,
  checkValuesForRegisteredBoat,
  checkValuesForUnregisteredBoat,
  checkValuesForNoBoat
} from './actions';

describe('Private person', () => {
  it('creates an application with registered boat', () => {
    gotoRegisteredBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');

    registeredBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan henkilötiedot');

    clickSubmit();
    cy.contains('Pakollinen kenttä');

    personPageFillForm();
    clickSubmit();

    checkValuesForRegisteredBoat();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
    overViewPageFillForm();
    clickSubmit();

    cy.contains('Kiitos hakemuksesta');
  });

  it('creates an application with unregistered boat', () => {
    gotoUnregisteredBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');

    unregisteredBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan henkilötiedot');

    clickSubmit();
    cy.contains('Pakollinen kenttä');

    personPageFillForm();
    clickSubmit();

    checkValuesForUnregisteredBoat();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
    overViewPageFillForm();
    clickSubmit();

    cy.contains('Kiitos hakemuksesta');
  });

  it('creates an application without a boat', () => {
    gotoNoBoatPage();
    clickSubmit();
    cy.contains('Pakollinen kenttä');

    noBoatPageFillForm();
    clickSubmit();
    cy.contains('Hakijan henkilötiedot');

    clickSubmit();
    cy.contains('Pakollinen kenttä');

    personPageFillForm();
    clickSubmit();

    checkValuesForNoBoat();
    clickSubmit();
    cy.contains('Pakollinen kenttä');
    overViewPageFillForm();
    clickSubmit();

    cy.contains('Kiitos hakemuksesta');
  });
});
