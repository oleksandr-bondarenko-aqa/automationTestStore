import {getProductByName, productName} from "../../support/helper";
import user from "../../fixtures/user.json";

it (`Place order with product name: ${productName}`, () => {
    cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);

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