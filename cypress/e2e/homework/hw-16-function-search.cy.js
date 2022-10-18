import {getProductByName, getProductByNameWithFor, productName} from "../../support/helper";
import user from "../../fixtures/user.json";
import authorizationPage from "../../support/pages/AuthorizationPage";

it (`Place order with product name`, () => {
    authorizationPage.visit();

    authorizationPage.submitLoginForm(user.userName, user.password);

    cy.visit('/');

    cy.get('#filter_keyword')
        .type('i')
        .closest('form')
        .submit();

    getProductByName('Total Moisture Facial Cream');

    cy.get('#product_quantity').clear().type('3');
    cy.get('.productpagecart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('h1.heading1').should('contain', ' Your Order Has Been Processed!');
    cy.get('.contentpanel')
        .should('contain', 'Your order')
        .and('contain', 'Thank you for shopping with us!')
})

it (`Place order with product name with for`, () => {
    authorizationPage.visit();

    authorizationPage.submitLoginForm(user.userName, user.password);

    cy.visit('/');

    cy.get('#filter_keyword')
        .type('i')
        .closest('form')
        .submit();

    getProductByNameWithFor('Total Moisture Facial Cream');

    cy.get('#product_quantity').clear().type('3');
    cy.get('.productpagecart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('h1.heading1').should('contain', ' Your Order Has Been Processed!');
    cy.get('.contentpanel')
        .should('contain', 'Your order')
        .and('contain', 'Thank you for shopping with us!')
})