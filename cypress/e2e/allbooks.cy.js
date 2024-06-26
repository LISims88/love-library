describe('Main Page', () => {
  it('shows the main page', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('All Books', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://romance-api.onrender.com/api/v1/books", {
      statusCode: 200,
      fixture: 'books.json'
    }).as('bookTest');
    cy.visit('http://localhost:3000');
  });

  it('has a button to show all books', () => {
    cy.get('.button-container').within(() => {
      cy.get('button').should('contain', 'Show All Books').click();
      cy.url().should('include', '/books');
    });
  });

  it('navigates to specific book pages', () => {
    cy.get('.button-container').within(() => {
      cy.get('button').should('contain', 'Show All Books').click();
    });
    cy.get('[href="/books/36"] > img').click();
    cy.url().should('include', '/books/36');
    cy.go('back'); // Go back to the books page
    cy.get('[href="/books/76"] > img').click();
    cy.url().should('include', '/books/76');
  });
});
describe('All Books sad path', () => {
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
});