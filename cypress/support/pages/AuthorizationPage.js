import user from "../../fixtures/user.json";
import BasePage from "./BasePage";

class AuthorizationPage extends BasePage {
    visit(){
        cy.log('**Open login page**');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname').type(user.userName);
    }

    getPasswordField(){
        return cy.get('#loginFrm_password').type(user.password);
    }

    getLoginButton(){
        return cy.get('button[title="Login"]').click();
    }

    typeTextInLoginField(userName){
        cy.log(`Type username ${userName} in login field`);
        this.getLoginField().type(userName);
    }

    typeTextInPasswordField(password){
        cy.log(`Type username ${password} in password field`);
        this.getPasswordField().type(password);
    }

    submitLoginForm(userName, password){
        cy.log(`Fill login form`);
        this.getLoginField().type(userName);
        this.getPasswordField().type(password);

        cy.log(`Click login button`);
        this.getLoginButton();
    }
}

export default new AuthorizationPage();