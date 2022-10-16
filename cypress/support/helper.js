export function searchExistingProduct(productName) {
    cy.get('#filter_keyword')
        .type(productName)
        .closest('form')
        .submit();

    cy.get('h1.productname').should('contain', productName);

}

export function getProductByName(productName) {

    cy.get('body').then((body) => {
        if (body.find(`[title="${productName}"]`).length) {
            cy.get(`[title="${productName}"]`).click();
        } else {
            cy.get('.pagination a').contains('>').click();
            getProductByName(productName);
        }
    })
}