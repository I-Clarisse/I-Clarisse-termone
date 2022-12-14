describe('calculator', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('It should add two numbers', () => {
        cy.get('[data-cy=button2]').click();
        cy.get('[data-cy=buttonAdd]').click();
        cy.get('[data-cy=button3]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '5.0')
    });


    it('It should subtract two numbers', () => {
        cy.get('[data-cy=button2]').click();
        cy.get('[data-cy=buttonAdd]').click();
        cy.get('[data-cy=button1]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '1.0')
    });


    it('It should multiply two numbers', () => {
        cy.get('[data-cy=button2]').click();
        cy.get('[data-cy=buttonAdd]').click();
        cy.get('[data-cy=button3]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '6.0')
    });


    it('It should divide two numbers', () => {
        cy.get('[data-cy=button6]').click();
        cy.get('[data-cy=buttonAdd]').click();
        cy.get('[data-cy=button3]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '2.0')
    });
    
})