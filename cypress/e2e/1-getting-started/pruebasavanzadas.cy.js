describe("inteceptar y simular solicitudes", () => {
    it("Intercepta y simula busqueda en google", () => {
        cy.intercept('GET', 'https://www.google.com/search*', {
            statusCode: 200,
            body: '<html><body><h1>Simulado respuestas de google</h1></body></html>'
        }).as('searchGoogle')

        cy.visit("https://www.google.com")
        cy.get("#APjFqb").type("Cypress intercept example{enter}")
        cy.wait("@searchGoogle")
        cy.contains("Simulado respuestas de google").should('exist')
    })
})