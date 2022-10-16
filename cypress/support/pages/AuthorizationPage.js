import user from "../../fixtures/user.json";
import BasePage from "./BasePage";

class AuthorizationPage extends BasePage {
    visit() {
        cy.log('**Open login page**');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginField() {
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField() {
        return cy.get('#loginFrm_password');
    }

    getLoginButton() {
        return cy.get('button[title="Login"]').click();
    }

    typeValidCredentialInLoginField(userName) {
        cy.log(`Type username ${userName} in login field`);
        this.getLoginField().type(userName);
    }

    typeInvalidCredentialInLoginField(text) {
        cy.log(`Type gibberish in login field`);
        this.getLoginField().type(text);
    }

    typeValidCredentialInPasswordField(password) {
        cy.log(`Type username ${password} in password field`);
        this.getPasswordField().type(password);
    }

    typeInvalidCredentialInPasswordField(text) {
        cy.log(`Type gibberish in password field`);
        this.getPasswordField().type(text);
    }

    submitLoginForm(userName, password) {
        cy.log(`Fill login form`);
        this.getLoginField().type(userName);
        this.getPasswordField().type(password);

        cy.log(`Click login button`);
        this.getLoginButton();
    }

    validateCookie() {
        cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
    }

    validateIncorrectCredentialErrorMessage() {
        cy.get('.alert.alert-error.alert-danger').should('contain', '\n' + 'Error: Incorrect login or password provided.')
    }
}

export default new AuthorizationPage();