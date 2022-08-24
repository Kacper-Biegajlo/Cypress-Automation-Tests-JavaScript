/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
    it("Also does not do much!", () => {
        expect("blue").to.have.lengthOf(4)
    })
    it("Rahul shetty academy", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // selenium get hit url in browser, cypress get acts like findElement in selenium
        cy.get('.product:visible').should('have.length', 4) // :visible grabs only visible elements
        // Parent - child chainning 
        cy.get('.products').as('productsLocator') // how to make reusable aliases
        cy.get('@productsLocator').find('.product').should('have.length', 4) // or
        cy.get('.products .product').should('have.length', 4) // wont work with alias
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('Item added')  // since cypress works directly on browser console.log command will print in browser console
        }) // addding second product to the cart

        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const vegName = $el.find('h4.product-name').text()
            if(vegName.includes('Cashews'))
            {
                cy.wrap($el.find('button')).click()
            }
        })
        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART') // in assertion promises are handled automatically
        
        
        // cy.log is cypress command and will print output in test case output
        cy.get('.brand.greenLogo').then(function(logoElement)
        {
            cy.log(logoElement.text()) // custom non cypress command to grab logo text made with a promise
        })
    })
})
