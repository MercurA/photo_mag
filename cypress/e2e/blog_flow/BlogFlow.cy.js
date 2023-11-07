describe('Blog flow including riddle', () => {
    it('should not restart the riddle', () => {
        cy.visit('http://localhost:3000/blog')
        cy.wait(1000)

        cy.get('div > input')
        .should('be.visible')
        .type('false')
        .get('[id="enter"]')
        .should('be.visible')
        .click()
        
        cy.get('[id="title"]')
        .should('be.visible')
    })
})