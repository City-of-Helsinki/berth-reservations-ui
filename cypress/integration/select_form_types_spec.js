import { gotoRegisteredBoatPage, gotoUnregisteredBoatPage, gotoNoBoatPage } from './actions';

describe('Change form types', () => {
  it('changes form on selecting boat type ', () => {
    gotoRegisteredBoatPage();
    cy.contains('Rekisteröidyn veneen tiedot');
    gotoUnregisteredBoatPage();
    cy.contains('Rekisteröimättömän veneen teidot');
    gotoNoBoatPage();
    cy.contains('Hankittavan veneen tiedot');
  });
});
