import user from '../fixtures/user.json';
import authorizationPage from "../support/pages/AuthorizationPage";
import accountPage from "../support/pages/AccountPage";

it('Authorization', () => {
    authorizationPage.visit();

    authorizationPage.submitLoginForm(user.userName, user.password);

    accountPage.getUserNameFromHeading();

    authorizationPage.validateCookie();
})

it('Test Inheritance', () => {
    authorizationPage.visit();

    authorizationPage.performSearch('i');
})
