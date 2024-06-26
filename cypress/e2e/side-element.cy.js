describe('Main Page', () => {
  it('shows the main page', () => {
    cy.visit('http://localhost:3000');
  });
});
describe('side Elements', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://romance-api.onrender.com/api/v1/books", {
      statusCode: 200,
      fixture: 'books.json'
    }).as('bookTest');
    cy.visit('http://localhost:3000');
  });
  it('Genres', () => {
    cy.get('.genre-filter').should('contain', 'Genre');
  });
  it('Authors', () => {
    cy.get('.author-filter').should('contain', 'Author');

});
  it('genres can click ', () => {
    cy.get('.genre-filter').should('contain', 'Genre');;
      cy.get('.genres > :nth-child(19) > a > span').click();
      cy.url().should('include', 'search-term/genres/Alien')
  });
  it('authors can click ', () => {
      cy.get('.author-filter').should('contain', 'Author');
      cy.get('.author > :nth-child(4) > a > span').click();
      cy.url().should('include', 'search-term/author/Laylah%20Roberts')
  });
  it('has back to home navigation', () => {
    cy.get('.side-elements > [href="/"]').should('contain', 'Go Back').click();
    cy.url().should('include', '/');
  });
});
describe('Side element sad path', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://romance-api.onrender.com/api/v1/books", {
      statusCode: 500, 
      fixture: 'books.json' 
    }).as('bookTest');
    cy.visit('http://localhost:3000');
  });

  it('displays an error message when unable to fetch books', () => {
    cy.get('.main-page > :nth-child(2)').should('contain', 'No books available'); 
  });
  it('Genres empty', () => {
    cy.get('.genre-filter').should('contain', 'Genre');
    cy.get('.genres').should('be.empty');
  });
  it('Authors empty ', () => {
    cy.get('.author-filter').should('contain', 'Author');
    cy.get('.author').should('be.empty');
});
});