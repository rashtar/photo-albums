describe('Albums e2e', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users/1/albums', {
      fixture: 'albums.json'
    });
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/albums/1/photos', {
      fixture: 'photos.json'
    });
    cy.visit('http://localhost:3000');
  })

  it('displays list of albums by default', () => {
    cy.get('p').should('have.length', 10)
    cy.get('.chakra-heading').first().should('contain.text', 'Albums')
  })

  it('should take the user to the album page when album is clicked', () => {
    cy.contains('quidem molestiae enim').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/albums/1');
    });
    cy.get('img').should('have.length', 50);
  })

  it('should take the user back to the home page when the heading is clicked', () => {
    cy.contains('quidem molestiae enim').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/albums/1');
    });
    cy.get('.chakra-heading').first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  })

  it('should take the user to the album page and filter on images', () => {
    cy.contains('quidem molestiae enim').click();
    cy.get('.chakra-input').type('rep');
    cy.get('img').should('have.length', 4);
  })

})
