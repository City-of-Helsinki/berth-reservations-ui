describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="registered_boat.register_number"]').type('12345');
  });
});
