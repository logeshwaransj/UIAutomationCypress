const HomePage = require ('../PageHelpers/HomePage');

describe('My First Test for MM', () => {
  it('open URL for Dev!', () => {
		HomePage.openURL();
		
		HomePage.Login();
		HomePage.CheckLoginURL();
	})
})

/* describe('test drop down', () => { 
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
*/