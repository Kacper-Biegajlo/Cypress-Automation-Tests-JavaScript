/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
    it("Rahul shetty academy", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productsLocator') 
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const vegName = $el.find('h4.product-name').text()
            if(vegName.includes('Cashews'))
            {
                cy.wrap($el.find('button')).click()
            }
        })
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})
