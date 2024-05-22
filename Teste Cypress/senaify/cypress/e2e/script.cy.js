describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });

  it("Visualizar playlists e executar uma música", () => {
    cy.get("[aria-label='title-head']");
    //eu vejo o header "Good morning"
    cy.get("[aria-label='title-head']").should("contain", "Good morning");
    //eu vejo uma lista de playlists
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0);
    //eu clico na primeira playlist
    //eu vejo uma lista de músicas
    cy.get("[aria-label='playlist-item']").first().click();
    //eu clico na primeira música
    //a música começa a tocar
    cy.get("[aria-label='music-item']").first().click();
  });

  it("Navegar entre playlists e executar outra música", () => {
    cy.wait(2000);
    //eu volto para a listagem de playlists
    cy.get("[data-testid='backButton-item']").click();
    //eu clico na segunda playlist
    //eu vejo uma lista de músicas
    cy.get("[aria-label='playlist-item']").eq(1).click();
    //eu clico na primeira música
    //a música começa a tocar
    cy.get("[aria-label='music-item']").first().click();
  });

  it("Procurar e favoritar uma música", ()=>{
    cy.wait(2000);

  })
});
