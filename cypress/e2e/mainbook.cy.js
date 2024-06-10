describe('Main Page', () => {
  it('shows the main page', () => {
    cy.visit('http://localhost:3000');
  });
});
describe('Main Book Container', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://romance-api.onrender.com/api/v1/books", {
      statusCode: 200,
      fixture: 'books.json'
    }).as('bookTest');
    cy.visit('http://localhost:3000');
  });
  it('displays the highest rated book', () => {
      cy.get('.main-book-container').within(() => {
      cy.get('img').should('have.attr', 'src');
      cy.get('img').click()
    });
    cy.url().should('include', '/books/65')
  });

  it('has a button to show all books', () => {
    cy.get('.button-container').within(() => {
      cy.get('button').should('contain', 'Show All Books').click();
    });
    cy.url().should('include', '/books');
  });
});
describe('Main Book Sad path', () => {
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