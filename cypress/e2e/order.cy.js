import user from '../fixtures/user.json'
import {searchExistingProduct} from "../support/helper";

describe('lesson 15-16', () => {

    it('Place Order', () => {
        cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);

        cy.visit('/index.php?rt=product/product&product_id=52');

        cy.get('#product_quantity').clear().type('4');
        cy.get('.productpagecart').click();
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();
        cy.get('h1.heading1').should('contain', ' Your Order Has Been Processed!');
        cy.get('.contentpanel')
            .should('contain', 'Your order')
            .and('contain', 'Thank you for shopping with us!')
    })
})

it('Place Order from search', () => {
    cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);

    cy.visit('/');

    searchExistingProduct('Benefit Bella Bamba');

    cy.get('#product_quantity').clear().type('4');
    cy.get('.productpagecart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('h1.heading1').should('contain', ' Your Order Has Been Processed!');
    cy.get('.contentpanel')
        .should('contain', 'Your order')
        .and('contain', 'Thank you for shopping with us!')
})
