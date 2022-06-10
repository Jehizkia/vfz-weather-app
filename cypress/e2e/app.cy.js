describe('empty spec', () => {
  it('user should be able to visit site', () => {
    cy.visit('http://localhost:8081/ \n')
  })

  it('It should contain Amsterdam by default', () => {
    cy.contains('Amsterdam')
  })

  it('should allow user to add city', () => {
    cy.get('input').type('Rotterdam')
    cy.contains('Toevoegen').click()
    cy.contains('Rotterdam')

    cy.get('input').type('New York')
    cy.contains('Toevoegen').click()
    cy.contains('New York')
  })

  it('should allow user to delete city', () => {
    console.log(cy.get('.w-icon-close'))
    cy.get('.w-icon-close').first().click()
    cy.contains('Amsterdam').should('not.exist')

    cy.get('.w-icon-close').first().click()
    cy.contains('Amsterdam').should('not.exist')
  })

  it('should allow user to switch unit', () => {
    cy.get('#imperial').click()
    cy.contains('° F')
  })

  it('should allow user to see more', () => {
    cy.get('.w-show-more-icon').click()
    cy.contains('Meta data')
  })
})
