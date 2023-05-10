describe("Test Pembayaran", function () {
    it("Berhasil login dan paybills pada website", function () {
     cy.fixture("user").then(function (data) {
      cy.login(data.daftar_user.zero.username, data.daftar_user.zero.password)

      cy.get('#pay_bills_tab').click()
      cy.get('#sp_payee').select('Sprint')
      cy.get('#sp_account').select('1')

    cy.fixture("user").then(function(data) {
      cy.bills(data.daftar_user.zero.amount, data.daftar_user.zero.date, data.daftar_user.zero.desc)
    })
  })
})
})

