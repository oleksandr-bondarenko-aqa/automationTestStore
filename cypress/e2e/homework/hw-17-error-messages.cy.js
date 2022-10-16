import authorizationPage from "../../support/pages/AuthorizationPage";
import user from "../../fixtures/user.json";

it('Validate error message on empty credentials', () => {
    authorizationPage.visit();

    authorizationPage.getLoginButton();

    authorizationPage.validateIncorrectCredentialErrorMessage();
});

it('Validate error message on incorrect login and correct password', () => {
    authorizationPage.visit();

    authorizationPage.typeInvalidCredentialInLoginField('qwqwe');

    authorizationPage.typeValidCredentialInPasswordField(user.password);

    authorizationPage.getLoginButton();

    authorizationPage.validateIncorrectCredentialErrorMessage();
});

it('Validate error message on correct login and incorrect password', () => {
    authorizationPage.visit();

    authorizationPage.typeValidCredentialInLoginField(user.userName);

    authorizationPage.typeInvalidCredentialInPasswordField('qwerty');

    authorizationPage.getLoginButton();

    authorizationPage.validateIncorrectCredentialErrorMessage();
});