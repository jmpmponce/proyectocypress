describe('Pruebas de cypress', () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/")
    })
    it("navega a la url dinamica y verifica el contenido", () => {
        cy.get('.dropdown-toggle').contains('Commands').click()
        cy.contains('Actions').click()
        cy.url().should("include", "/commands/actions")
        cy.get("h1").should("contains.text", "Actions")

    })

    it("validar uan segunda ruta traversal", () => {
        cy.get('.dropdown-toggle').contains('Commands').click()
        cy.contains('Traversal').click()
        cy.url().should("include", "/commands/traversal")
        cy.get("h1").should("contains.text", "Traversal")
         })
    })