// prettier-ignore
describe('My First Test', function() {
  it('finds the content "type"', function() {
    cy.visit('http://localhost:3000')
    cy.get('#form.registered_boat.register_number')
      .type('12345');
  });
});
