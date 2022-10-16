import user from '../fixtures/user.json';
import authorizationPage from "../support/pages/AuthorizationPage";
import accountPage from "../support/pages/AccountPage";

    it('Authorization', () => {
        authorizationPage.visit();

        authorizationPage.submitLoginForm(user.userName, user.password);

        accountPage.getUserNameFromHeading();

        cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
    })

it('Test Inheritance', () => {
    authorizationPage.visit();

    authorizationPage.performSearch('i');
})
