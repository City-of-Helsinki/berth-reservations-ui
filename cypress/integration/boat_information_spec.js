describe('Boat information', () => {
  const firstPageFillForm = () => {
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

  it('gives validation errors', () => {
    cy.visit('http://localhost:3000');
    cy.get('[type="submit"]').click();
    cy.contains('Pakollinen kenttä');
  });

  it('form submit takes to next step', () => {
    cy.visit('http://localhost:3000');
    firstPageFillForm();
    cy.get('[type="submit"]').click();
    cy.contains('Hakijan tiedot');
  });
});
