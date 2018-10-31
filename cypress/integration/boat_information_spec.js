describe('Boat information', () => {
  const firstPageFillForm = () => {
    cy.get('input[name="registered_boat.register_number"]')
      .type('12345')
      .get('select[name="registered_boat.type"]')
      .select('b')
      .get('input[name="registered_boat.width"]')
      .type('5')
      .get('input[name="registered_boat.length"]')
      .type('20')
      .get('input[name="registered_boat.depth"]')
      .type('3')
      .get('input[name="registered_boat.weight"]')
      .type('10500')
      .get('input[name="registered_boat.boat_name"]')
      .type('RMS Titanic')
      .get('input[name="registered_boat.boat_model"]')
      .type('Sinking type');
  };

  it('gives validation errors', () => {
    cy.visit('http://localhost:3000');
    firstPageFillForm();
    cy.get('[type="submit"]');
    cy.click();
    cy.contains('Pakollinen kenttä');
  });

  it('form submit takes to next step', () => {
    cy.visit('http://localhost:3000');
    firstPageFillForm();
    cy.get('[type="submit"]').click();
    cy.contains('Hakijan tiedot');
  });
});
