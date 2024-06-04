describe('Main Page', () => {
  it('shows the main page', () => {
    cy.visit('http://localhost:3000')
  })
});
describe('header component', () => {
  beforeEach(()=>{
    cy.intercept("GET", "http://localhost:4000/api/v1/books", {
      statusCode: 200,
      fixture: 'books.json'
    }).as('bookTest');
    cy.visit('http://localhost:3000')
  })
  it('input', ()=>{
    cy.get('.search')
    cy.get('label').should('contain', "Search")
    cy.get('#search-input')
  })
  it('h1', ()=>{
    cy.get('h1').should('contain', "Love Library")
  })
  it('h3', ()=>{
    cy.get('h3').should('contain', "About/Contact")
  })
})