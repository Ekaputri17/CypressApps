/// <reference types="cypress" />

describe("Tugas Searchbox Test", function () {
    it("Berhasil login menggunakan kredensial yang benar", function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
    
        cy.get("#searchTerm").type("online {enter}");

        
    });
});