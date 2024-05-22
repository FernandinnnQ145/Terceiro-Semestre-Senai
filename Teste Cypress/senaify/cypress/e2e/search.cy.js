describe('template spec', () => {
  before(() => {
    cy.visit('/')
  })

  it('Redirecionar para a tela de buscar', ()=>{
    cy.get("[href='/Search']").click();
    cy.scrollTo("top");
  })

  it("Procurando uma musica" ,()=>{
    cy.get("[data-testid='campoBusca']").type("Trem bala")

    cy.get("[aria-label='music-item']").should("have.length.greaterThan",0)
  })

  it("Clicar na musica desejada", ()=>{
    cy.get("[aria-label='music-item']").filter(":contains('Ana Viela')").click()
    // cy.get("[aria-label='music-item']").filter(":contains('Ana Viela')").click()
  })
})