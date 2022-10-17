import BasePage from "./BasePage";
import user from "../../fixtures/user.json";

class ProductPage extends BasePage {
    visit() {
        cy.log('**Open product page**');
        cy.visit('/index.php?rt=product/product&product_id=52');
    }

    getProductQuantity() {
        return cy.get('#product_quantity');
    }

    getAddToCartButton() {
        return cy.get('.productpagecart');
    }

    getCheckoutButton() {
        return cy.get('#cart_checkout1');
    }

    getConfirmOrderButton() {
        return cy.get('#checkout_btn');
    }

    validatePurchase() {
        cy.get('h1.heading1').should('contain', ' Your Order Has Been Processed!');
        cy.get('.contentpanel')
            .should('contain', 'Your order')
            .and('contain', 'Thank you for shopping with us!');
    }
}

export default new ProductPage();