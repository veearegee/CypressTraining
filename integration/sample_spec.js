describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })

  describe('Login to Facebook', function() {
    it('Login to Facebook', function() {
      cy.visit(' https://www.facebook.com/')
    })
  })