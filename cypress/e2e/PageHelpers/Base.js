export default class BaseClass {
	
	static pause (ms) {
		cy.wait(ms)
	}
	
	static logMessage (message) { 
		cy.log(message)
	}
}