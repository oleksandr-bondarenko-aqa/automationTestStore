import user from '../fixtures/user.json'
import {getProductByName, productName, searchExistingProduct} from "../support/helper";
import productPage from "../support/pages/ProductPage";
import authorizationPage from "../support/pages/AuthorizationPage";

it('Place Order', () => {
    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);

    productPage.visit();

    productPage.getProductQuantity().clear().type('4');
    productPage.getAddToCartButton().click();
    productPage.getCheckoutButton().click();
    productPage.getConfirmOrderButton().click();

    productPage.validatePurchase();

})

it('Place Order from search', () => {
    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);

    productPage.visitHomePage();

    searchExistingProduct('Benefit Bella Bamba');

    productPage.getProductQuantity().clear().type('4');
    productPage.getAddToCartButton().click();
    productPage.getCheckoutButton().click();
    productPage.getConfirmOrderButton().click();

    productPage.validatePurchase();
})
