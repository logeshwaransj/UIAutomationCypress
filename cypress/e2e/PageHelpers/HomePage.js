import BaseClass from "./Base";
import HomePageLocators from "../Locators/HomePageLocators";
const data = require("../../fixtures/example.json");
var locators = new HomePageLocators();

class HomePage extends BaseClass {
	openURL ()
	{
		console.log(data.baseurl);
		cy.visit(data.baseurl);
	}
	
	Login()
	{
		BaseClass.logMessage("test");
		cy.get(locators.userNameinput).type(data.user)
		cy.get(locators.passWordinput).type(data.pass)
		cy.get(locators.loginButton).click()
	}
	
	CheckLoginURL()
	{
		cy.url().should( 'be.equal', data.LoginRedirectURL)
	}
}

module.exports = new HomePage();