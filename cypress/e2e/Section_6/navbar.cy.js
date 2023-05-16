/// <reference types="cypress" />

describe("Navbar Test", function () {
    it("Should display online banking content", function () {
        cy.visit("http://zero.webappsecurity.com/index.html");

        cy.get('#onlineBankingMenu').click()
        cy.get('h1').should('be.visible')
        cy.url().should('include', 'online-banking.html')
    });

    it("Should display feedback content", function () {
        cy.visit("http://zero.webappsecurity.com/index.html");

        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it("Should display homepage content", function () {
        cy.visit("http://zero.webappsecurity.com/index.html");

        cy.get("a")
          .should("have.contain", "Zero Bank")   
        cy.url().should('include', 'index.html')
    });

    it("Should display sig in button", function () {
        cy.visit("http://zero.webappsecurity.com/index.html");

       cy.get("#signin_button").click()
       cy.url().should('include', 'login.html')
    });
});