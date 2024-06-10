describe('Main Page', () => {
  it('shows the main page', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('header component', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://romance-api.onrender.com/api/v1/books", {
      statusCode: 200,
      fixture: 'books.json'
    }).as('bookTest');
    cy.visit('http://localhost:3000');
  });

  it('h1', () => {
    cy.get('h1').should('contain', "Love Library");
  });

  it('About/contact', () => {
    cy.get('h3').contains("About/Contact").click();
    cy.url().should('include', '/about');
  });

  it('TBR', () => {
    cy.get('h3').contains("TBR").click();
    cy.url().should('include', '/tbr');
  });
});