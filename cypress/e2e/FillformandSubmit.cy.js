describe('Probando el HP de la US', () => {
    it('Llenando todos los Inputs', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.get("[type='text']").type("Cesita Colón");
        cy.get("#userEmail").type("ces1@gmail.com");
        cy.xpath("//textarea[@id='currentAddress']").type("Todo lo que conlleva a la Dirección actual");
        cy.get("#permanentAddress").type("Todo lo que conlleva a la Dirección Permanente");
        cy.get("#submit").click();
        cy.get("#email").should('exist')


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