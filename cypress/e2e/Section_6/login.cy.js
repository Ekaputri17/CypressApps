/// <reference types="cypress" />

describe('Tugas Login and Logout Web ZeroBank', () => {
    it('Success login', function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', function () {
        cy.fixture("data").then(data => {
            cy.login(data.invaliduser.namaakun, data.invaliduser.sandi)
            })
            cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });

    it('Should login to application with valid data and logout form the application', function () {
        cy.fixture("data").then(data => {
            cy.login(data.validuser.namaakun, data.validuser.sandi)
            })
            cy.get('h2').should('contain.text', 'Cash Accounts')

        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    })
});