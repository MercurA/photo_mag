describe('App', () => {
    it('should navigate to main landing page', () => {
        cy.visit('http://localhost:3000')

        cy.get('#cover_image').should('be.visible')

    })
})