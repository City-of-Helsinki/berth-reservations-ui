import { gotoOverviewPage, clickSubmit } from './actions';
import values from '../fixtures/values';

describe('Overview', () => {
  it('successfully goes to next step', () => {
    gotoOverviewPage();
    cy.contains(`Nimi:${values.boat.name}`);
    cy.contains(`Rekisterinumero:${values.boat.register_number}`);
    cy.contains(`Tyyppi:${values.boat.type}`);
    cy.contains(`Malli:${values.boat.model}`);
    cy.contains(`Leveys:${values.boat.width}m`);
    cy.contains(`Pituus:${values.boat.length}m`);
    cy.contains(`Syväys:${values.boat.draught}m`);
    cy.contains(`Paino:${values.boat.weight}kg`);
    cy.contains(`${values.applicant.name.first_name} ${values.applicant.name.last_name}`);
    cy.contains(values.applicant.contact.email);
    clickSubmit();
    cy.contains('Kiitos hakemuksesta');
  });
});
