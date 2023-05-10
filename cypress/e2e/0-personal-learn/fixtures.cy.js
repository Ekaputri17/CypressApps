
describe("Test login", function () {

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
  it("Berhasil melakukan pembelian menggunakan akun standard_user", function () {
     cy.fixture("user").then(function (data) {
      cy.visit("https://www.saucedemo.com/");
  
      cy.get("#user-name").type(data.daftar_user.standard.username);
      
      cy.get("#password").type(data.daftar_user.standard.password);
      
      cy.get("#login-button").click();

      cy.get("#item_1_img_link").click()
      cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
      cy.get("#back-to-products").click()
      cy.get("#shopping_cart_container").click()
      cy.get("#checkout").click()
      cy.fixture("user").then(function (data) {
        cy.get("#first-name").type(data.daftar_user.standard.firstname);
        cy.get("#last-name").type(data.daftar_user.standard.lastname);
        cy.get("#postal-code").type(data.daftar_user.standard.zip);
      cy.get("#continue").click()
      cy.get("#finish").click()
      cy.get("#react-burger-menu-btn").click()
      cy.get("#logout_sidebar_link").click()
      })
    });
  });
});
