describe('Vue.js', () => {
  it('works', () => {
    cy.visit('/vue.html')

    cy.get('h1')
      .should(el => expect(el.text()).to.contain('Hello, world!'))
      .should('have.css', 'font-size')
      .and('equal', '48px')

    cy.get('p')
      .should(el => expect(el.text()).to.contain('Lorem ipsum dolor'))
      .should('have.css', 'font-style')
      .and('equal', 'italic')
  })
})
