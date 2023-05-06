
describe("Test login", function () {
    it("Berhasil login menggunakan akun standard_user", function () {
     cy.fixture("user").then(function (data) {
      cy.visit("https://www.saucedemo.com/");
  
      cy.get("#user-name").type(data.daftar_user.standard.username);
      
      cy.get("#password").type(data.daftar_user.standard.password);
      
      cy.get("#login-button").click();
    
      // assertions
      cy.url().should("include", "inventory.html");

    });
  });
  
  it("Gagal login menggunakan akun locked_out_user", function () {
    cy.fixture("user").then(function (data) {
     cy.visit("https://www.saucedemo.com/");
 
     cy.get("#user-name").type(data.daftar_user.locked_out.username);
     
     cy.get("#password").type(data.daftar_user.locked_out.password);
     
     cy.get("#login-button").click()

     //assertions
     cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });
  });
  it("Berhasil login menggunakan akun problem_user", function () {
    cy.fixture("user").then(function (data) {
     cy.visit("https://www.saucedemo.com/");
 
     cy.get("#user-name").type(data.daftar_user.problem.username);
     
     cy.get("#password").type(data.daftar_user.problem.password);
     
     cy.get("#login-button").click();
   
     // assertions
     cy.url().should("include", "inventory.html");
    });
  });

  it("Berhasil login menggunakan akun performance_glitch_user", function () {
    cy.fixture("user").then(function (data) {
     cy.visit("https://www.saucedemo.com/");
 
     cy.get("#user-name").type(data.daftar_user.performance_glitch.username);
     
     cy.get("#password").type(data.daftar_user.performance_glitch.password);
     
     cy.get("#login-button").click();
   
     // assertions
     cy.url().should("include", "inventory.html");
    });
  });
});
