describe('Main landing page', () => {
    it('Desktop flow to check menu and image existance', () => {
        cy.visit('http://localhost:3000')

        cy.get('[id="black&white"]')
        .should('be.visible')
        .click()
        .get('#cover_image')
        .should('be.visible')
        .get("#galery")
        .children()
        .its('length')
        .should('be.greaterThan', 1)
    })
})