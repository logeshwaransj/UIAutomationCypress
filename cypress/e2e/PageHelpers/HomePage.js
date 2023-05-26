import BaseClass from "./Base";
const data = require("../../fixtures/example.json");

class HomePage extends BaseClass {
	openURL ()
	{
		console.log(data.baseurl);
		cy.visit(data.baseurl);
	}
	
	Login()
	{
		cy.get('input#username').type(data.user)
		cy.get('input#password').type(data.pass)
		cy.get('button#submit').click()
	}
	
	CheckLoginURL()
	{
		cy.url().should( 'be.equal', data.LoginRedirectURL)
	}
}

module.exports = new HomePage();