describe("manejo de dominios cruzados con cy orgin", () => {
  it("interactua con dominios diferentes", () => {
    cy.visit("https://example.com");
    cy.log("visitando el sitio de example")
    cy.origin("https://the-internet.herokuapp.com", () => {
      cy.visit("https://the-internet.herokuapp.com");
      cy.log("visitando el sitio de heroku")
      cy.get("h1").should("contain.text", "Welcome to the-internet");
      cy.log("finalizando el test")
    });
  });
});
