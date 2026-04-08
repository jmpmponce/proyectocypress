describe('Pruebas de cypress', () => {
    it("Visitar la pagina y verifique titulo", () => {
        cy.visit("https://example.cypress.io")
        cy.get("h1").should("contain.text", "Kitchen Sink")
        cy.title().should("eq", "Cypress.io: Kitchen Sink")
    })
})