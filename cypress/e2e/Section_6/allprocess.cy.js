describe("Test login", function () {

    it("Berhasil melakukan pembelian menggunakan akun standard_user", function () {
        cy.fixture("user").then(function (user) {
         cy.visit("https://www.saucedemo.com/");

         cy.loginsauce(user.daftar_user.standard.username, user.daftar_user.standard.password)
     
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
    it("Akun problem_user tidak dapat melanjutkan pembayaran", function () {
        cy.fixture("user").then(function (user) {
         cy.visit("https://www.saucedemo.com/");
    
         cy.loginsauce(user.daftar_user.problem.username, user.daftar_user.problem.password)
    
         cy.get("#login-button").click();
    
         cy.get("#item_4_img_link").click()
         cy.get("#add-to-cart-sauce-labs-fleece-jacket").click()
         cy.get("#back-to-products").click()
         cy.get("#shopping_cart_container").click()
         cy.get("#checkout").click()
         cy.fixture("user").then(function (data) {
           cy.get("#first-name").type(data.daftar_user.problem.firstname);
        
        cy.get("#continue").click()
        cy.get('.error-message-container.error').should('be.visible', 'Error: Last Name is required')
        });
      });
    });

    it("Berhasil melakukan pembelian menggunakan akun performance_glitch_user", function () {
        cy.fixture("user").then(function (user) {
         cy.visit("https://www.saucedemo.com/");

         cy.loginsauce(user.daftar_user.performance_glitch.username, user.daftar_user.performance_glitch.password)
     
         cy.get("#login-button").click();
   
         cy.get("#item_2_img_link").click()
         cy.get("#add-to-cart-sauce-labs-onesie").click()
         cy.get("#back-to-products").click()
         cy.get("#shopping_cart_container").click()
         cy.get("#checkout").click()
         cy.fixture("user").then(function (data) {
           cy.get("#first-name").type(data.daftar_user.performance_glitch.firstname);
           cy.get("#last-name").type(data.daftar_user.performance_glitch.lastname);
           cy.get("#postal-code").type(data.daftar_user.performance_glitch.zip);
         cy.get("#continue").click()
         cy.get("#finish").click()
         cy.get("#react-burger-menu-btn").click()
         cy.get("#logout_sidebar_link").click()
         });
       });
    });
});
