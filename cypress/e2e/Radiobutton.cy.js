describe('Probando el HP de la US', () => {

    it('Chequeando todos los Radio Button', () => {
        cy.visit('https://demoqa.com/radio-button');
        cy.get("[for='yesRadio']").click()
        cy.contains('You have selected Yes').should("exist")


        


    })
    
    
    
})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
}