// <reference types="cypress" />

describe('Working with inputs', () => {
  it('Visit the website', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    
    cy.get("#user_login").type("username");
    cy.get("#user_password").type("password");

    cy.get("#user_remember_me").type("_remember_me");

    cy.get("input[type=submit]").click();

  });
});