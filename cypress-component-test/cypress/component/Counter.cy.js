import React from "react";
import Counter from "../../src/Counter";
describe("Prueba de componente counter en react", () => {
  it("Monta el componente y valida su comportamiento", () => {
    cy.mount(<Counter />);
    cy.get('[data-testid="count"]').should("contain", "Count: 0");
    cy.get('[data-testid="increment"]').click();
    cy.get('[data-testid="count"]').should("contain", "Count: 1");
  });
});
