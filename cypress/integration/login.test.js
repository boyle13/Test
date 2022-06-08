/// <reference types="cypress" />

describe('Login & Logout Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
    })
    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()

    });
    it('Should display an error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });


    it('Should try to login with valid data', () => {
        cy.login()
    });
    it('Should logout from the page', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include','index.html')        
    });
})