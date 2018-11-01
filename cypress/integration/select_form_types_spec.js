import { gotoRegisteredBoatPage, gotoUnregisteredBoatPage, gotoNoBoatPage } from './actions';

describe('change form types', () => {
  it('test ', () => {
    gotoRegisteredBoatPage();
    cy.contains('Rekisteröidyn veneen tiedot');
    gotoUnregisteredBoatPage();
    cy.contains('Rekisteröimättömän veneen teidot');
    gotoNoBoatPage();
    cy.contains('Hankittavan veneen tiedot');
  });
});
