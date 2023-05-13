describe ('sesion de pruebas',() => {
    
    beforeEach(()=>{

        cy.visit( 'https://www.saucedemo.com/');
    })

    it ('login',() =>{

      cy.get('[data-test="username"]')
      .type('standard_user')
      cy.get('[data-test="password"]')
      .type('secret_sauce{enter}')

})
})