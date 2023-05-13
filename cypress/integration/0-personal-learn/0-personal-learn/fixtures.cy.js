
describe("Test login", function () {

  it("Gagal login menggunakan akun locked_out_user", function () {
    cy.fixture("user").then(function (data) {
     cy.visit("https://www.saucedemo.com/");
 
     cy.get("#user-name").type(data.daftar_user.locked_out.username);
     cy.get("#password").type(data.daftar_user.locked_out.password);
     cy.get("#login-button").click()

     //assertions
     cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
  });
  it("Berhasil melihat semua produk di aplikasi", function () {
     cy.fixture("user").then(function (data) {
      cy.visit("https://www.saucedemo.com/");

      cy.get("#user-name").type(data.daftar_user.standard.username);
      cy.get("#password").type(data.daftar_user.standard.password);
      cy.get("#login-button").click();
      cy.get("#shopping_cart_container").click()
     })
    });

    it("Berhasil logout dari aplikasi", function () {
      cy.fixture("user").then(function (data) {
        cy.visit("https://www.saucedemo.com/");
      
        cy.get("#user-name").type(data.daftar_user.standard.username);
        cy.get("#password").type(data.daftar_user.standard.password);
        cy.get("#login-button").click();
        cy.get("#react-burger-menu-btn").click()
        cy.get("#logout_sidebar_link").click({force: true})
      })
    })

  it("Berhasil ketika mengisi kolom informasi", function () {
      cy.fixture("user").then(function (data) {
        cy.visit("https://www.saucedemo.com/");
        
        cy.get("#user-name").type(data.daftar_user.standard.username);
        cy.get("#password").type(data.daftar_user.standard.password);
        cy.get("#login-button").click();
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
        cy.get("#shopping_cart_container").click()
        cy.get("#checkout").click()
      })
    })

    
    it("Berhasil dapat mengakses pembayaran", function () {
      cy.fixture("user").then(function (data) {
        cy.visit("https://www.saucedemo.com/");
        
        cy.get("#user-name").type(data.daftar_user.standard.username);
        cy.get("#password").type(data.daftar_user.standard.password);
        cy.get("#login-button").click();
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
        cy.get("#shopping_cart_container").click()
        cy.get("#checkout").click()

      cy.fixture("user").then(function (data) {
        cy.get("#first-name").type("Eka")
        cy.get("#last-name").type("Putri")
        cy.get("#postal-code").type("1717")
        cy.get("#continue").click()
        cy.get("#finish").click()
      })
    })
  });


  });
