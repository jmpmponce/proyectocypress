describe("Pruebas de comandos personalizados de login", ()=>{
    it("iniciar sesion con comandos personalizados", ()=>{
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.login("tomsmith", "SuperSecretPassword!")
        cy.get('#flash').should("contain", "You logged into a secure area!")
    })
    
})