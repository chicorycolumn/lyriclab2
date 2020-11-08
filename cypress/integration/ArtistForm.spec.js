describe("Searching an artist", () => {
  it("Shows you the artist name you have just asked to search", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="artistNameInput"]').type("One Direction");

    cy.get('[data-testid="artistNameSubmitButton"]').click();

    cy.get('[data-testid="artistNameFeedbackDisplay"]');

    cy.contains("Artist results for One Direction:");
  });

  it("Tells you when no artists are found for your searchterm", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="artistNameInput"]').type("qwqwqw");

    cy.get('[data-testid="artistNameSubmitButton"]').click();

    cy.get('[data-testid="artistNameFeedbackDisplay"]');

    cy.contains("No artists by the name qwqwqw were found");
  });
});
