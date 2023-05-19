describe('My First Test for MM', () => {
  it('open URL for stage!', () => {
	  
	  
	cy.visit('https://stage.managedmethodsdev.com/')
	
	cy.url().should( 'be.equal',('https://stage.managedmethodsdev.com/Hubble/servlet/LoginServlet'))

	cy.get('.user_name').type('testrunner')
	cy.get('.user_pwd').type('!MM$upp@rt^tr@ppu$MM32*')
	cy.get('.login-btn').click()
	
	//cy.login2Step('invalidLogin');
  })
})

describe('test drop down', () => {
  it('drop down select!', () => {
	  
	cy.visit('https://www.bstackdemo.com/')
	
	cy.url().should( 'be.equal',('https://www.bstackdemo.com/'))

	cy.get('div.sort').children('select')
		.select(1)
		
	cy.get('div.sort').children('select').select(1).invoke('val').as('testname')

	//cy.log("===== Print Value Using Invoke Command ==== ", this.testname)		
 })
 
 it("Print Value - ALias => Invoke - Command ", function () {
        cy.log("===== Print Value Using Invoke Command ==== ", this.textFunction)
    })

})


