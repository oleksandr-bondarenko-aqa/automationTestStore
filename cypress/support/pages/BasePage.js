import user from "../../fixtures/user.json";

export default class BasePage {
    setAuthorizationCookie() {
        cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);
    }

    visitHomePage() {
        cy.visit('/');
    }

    getSearchField() {
        return cy.get('#filter_keyword');
    }

    performSearch(searchQuery) {
        cy.log(`**Perform search with search query: ${searchQuery}**`)
        this.getSearchField().type(searchQuery);
    }
}