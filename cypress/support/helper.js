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

export function getProductByNameWithFor (productName) {
    cy.get('.pagination a').then(pages => {
        return pages.length;
    }).then(pageCount => {
        for (let i = 0; i < pageCount; i++){
            cy.location().then(location => {
                if (!location.search.includes('product/product')){
                    cy.get('body').then((body) => {
                        if (body.find(`[title="${productName}"]`).length) {
                            cy.get(`[title="${productName}"]`).click();
                        } else {
                            cy.get('.pagination a').contains('>').click();
                        }
                    })
                }
            })
        }
    })
}