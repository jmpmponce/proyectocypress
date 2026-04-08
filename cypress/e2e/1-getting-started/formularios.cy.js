describe('Pruebas de cypress', ()=>{
    it("Validar envio de formularios", ()=>{
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get("#couponCode1").type("1010235")
        cy.get('.action-form').submit()
        cy.get('.well > p').should('contain', 'Your form has been submitted!')
    })
})