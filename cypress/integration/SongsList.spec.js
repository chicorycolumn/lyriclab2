describe("Sorting the tracks of an artist", () => {
  it("Orders the tracks by Track Length when clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="artistNameInput"]').type("minaj");

    cy.get('[data-testid="artistNameSubmitButton"]').click();

    cy.get('[data-testid="artistResult"]').first().click();

    cy.get('[data-testid="songRow"]').first();

    cy.contains("3:51");

    cy.get('[data-testid="trackTimeMillisButton"]').click();

    cy.get('[data-testid="songRow"]').first();

    cy.contains("8:48");
  });
});
