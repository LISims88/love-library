describe('Main Page', () => {
  it('shows the main page', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('Add to TBR', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:4000/api/v1/books", {
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

  it('navigates to specific book pages and adds to TBR', () => {
    cy.get('.button-container').within(() => {
      cy.get('button').should('contain', 'Show All Books').click();
    });
    cy.get('[href="/books/36"] > img').click();
    cy.url().should('include', '/books/36');
    cy.get('button').click();
    cy.go('back'); 
    cy.get('[href="/books/76"] > img').click();
    cy.url().should('include', '/books/76');
    cy.get('button').click();
  });
});
describe('View TBR', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      const books = [
        {
          id: 36,
          title: "Path of Destruction (Camassia Cove Universe Book 3)",
          imgsrc: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1488252812i/34419255.jpg",
        },
        {
          id: 75,
          title: 'Punished',
          imgsrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485620115i/34036981.jpg',
        },
        {
          id: 76,
          title: "The Dom's Virgin",
          imgsrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1488981369i/34511546.jpg',
        },
      ];
      win.localStorage.setItem('tbr', JSON.stringify(books));
    });

    cy.visit('http://localhost:3000/tbr');
  });

  it('should go to TBR and display the list', () => {
    cy.get('h2').contains('To Be Read List:').should('be.visible');
    
    cy.window().then((win) => {
      const books = JSON.parse(win.localStorage.getItem('tbr'));

      books.forEach((book, index) => {
        const imgSelector = `.tbr-item img:nth-child(${index + 1})`;
        cy.get(imgSelector).should('be.visible');
        cy.get(imgSelector).should('have.attr', 'src', book.imgsrc);
        cy.get(imgSelector).should('have.attr', 'alt', book.title);
      });
    });
  });
});

describe('All Books sad path', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:4000/api/v1/books", {
      statusCode: 500, 
      fixture: 'books.json' 
    }).as('bookTest');
    cy.visit('http://localhost:3000/tbr');
  });
  it('should be empty', () => {
    cy.get('h2').contains('To Be Read List:').should('be.visible');
  });
});