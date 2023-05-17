// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username,password) => { 
    cy.visit("http://zero.webappsecurity.com/index.html"); 

    cy.get("#signin_button").click()

    cy.get("#user_login").type(username);
    cy.get("#user_password").type(password); 
    cy.contains("Sign in").click()
})

Cypress.Commands.add("bills", (amount,date,desc) => {
    cy.get("#sp_amount").type(amount)
    cy.get("#sp_date").type(date)
    cy.get(".ui-state-default.ui-state-highlight").click()
    cy.get("#sp_description").type(desc, {force: true} )
    cy.get("#pay_saved_payees").click()
})

Cypress.Commands.add("loginsauce", (username, password) => {
    cy.get("#user-name").type(username)
    cy.get("#password").type(password)
})

Cypress.Commands.add("information", (firstname, lastname, zip) => {
    cy.get("#first-name").type(firstname)
    cy.get("#last-name").type(lastname)
    cy.get("#postal-code").type(zip)
})
