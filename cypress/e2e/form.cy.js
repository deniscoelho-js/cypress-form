describe('Form', () => {
  beforeEach(() => cy.visit('../../formulario.html'))
  // it('Formulario', () => {
  //   cy.visit('../../formulario.html')
  // })
  it.only('', () => {
    cy.get('#nome').type('Denis')
    cy.get('#sobrenome').type('Coelho')
    cy.get('#email').type('denis@email.com')
    cy.get('.botao').click()
  })
})
