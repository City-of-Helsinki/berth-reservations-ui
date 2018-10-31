describe('Boat information', () => {
  const registeredBoatPageFillForm = () => {
    cy.get('input[name="boat.register_number"]')
      .type('12345')
      .get('select[name="boat.type"]')
      .select('b')
      .get('input[name="boat.width"]')
      .type('5')
      .get('input[name="boat.length"]')
      .type('20')
      .get('input[name="boat.draught"]')
      .type('3')
      .get('input[name="boat.weight"]')
      .type('10500')
      .get('input[name="boat.name"]')
      .type('RMS Titanic')
      .get('input[name="boat.model"]')
      .type('Sinking type');
  };

  const personPageFillForm = () => {
    cy.get('input[name="applicant.name.first_name"]')
      .type('Lusso')
      .get('input[name="applicant.name.last_name"]')
      .type('Manatee')
      .get('input[name="applicant.postal.street_address"]')
      .type('Glöö Street 123')
      .get('input[name="applicant.postal.postal_code"]')
      .type('12345')
      .get('input[name="applicant.postal.munacipality"]')
      .type('Manatee Island')
      .get('input[name="applicant.contact.mobile_phone"]')
      .type('+358121231234')
      .get('input[name="applicant.contact.email"]')
      .type('pikselo@manatees.net');
  };

  it('gives validation errors', () => {
    cy.visit('http://localhost:3000');
    cy.get('[type="submit"]').click();
    cy.contains('Pakollinen kenttä');
  });

  it('takes us to person details page on form fill', () => {
    cy.visit('http://localhost:3000');
    registeredBoatPageFillForm();
    cy.get('[type="submit"]').click();
    cy.contains('Hakijan tiedot');
  });

  it('takes us to overvio page on form fill', () => {
    cy.visit('http://localhost:3000');
    registeredBoatPageFillForm();
    cy.get('[type="submit"]').click();
    personPageFillForm();
    cy.get('[type="submit"]').click();
    cy.contains('Yhteenveto');
  });
});
