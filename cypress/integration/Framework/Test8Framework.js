/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ShopPage from '../../support/pageObjects/shopPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
import ConfirmPage from '../../support/pageObjects/ConfirmPage'

describe('My Test Framework Suite', () => {
    before(() => {
        // runs once before all tests in the block
        cy.fixture('testData').then(function(data) {
            this.data = data
        })
    })
    
    it("Rahul shetty academy Framework", function() {
        // specific timeout for this spec
        Cypress.config('defaultCommandTimeout', 8500) 
        const homePage = new HomePage()
        const shopPage = new ShopPage()
        const checkoutPage = new CheckoutPage()
        const confirmPage = new ConfirmPage()
        cy.visit(Cypress.env("url")+"/angularpractice/")

        homePage.getNameBox().type(this.data.name)
        homePage.getGenderDrop().select(this.data.gender)
        homePage.get2WayDataBindingBox().should('have.value', this.data.name)
        homePage.getNameBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneurButton().should("be.disabled")
        homePage.getShopButton().click()
        // cy.pause() // pausing test for debugging / also can use .debug()


        // adds first position from array of product names - Blackberry
        cy.selectProduct(this.data.productName[0]) 
        // lets remove it from my cart 
        shopPage.getCheckoutButton().click()
        checkoutPage.getRemoveButton().click()
        cy.ConfirmEmptyCart()
        checkoutPage.getContinueShoppingButton().click()

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
        shopPage.getCheckoutButton().click()
        let sum = 0
        cy.CompareTotals(sum)
        checkoutPage.getCheckoutButton().click()

        confirmPage.getCountryBox().type("P")
        // specific timeout for this spec - starts at this pount
        Cypress.config('defaultCommandTimeout', 8000) 
        cy.selectCountry(this.data.countryName)
        // made it as custom command since its more fun
        confirmPage.getCountryBox().should("have.value", this.data.countryName)
        confirmPage.getAgreeChechbox().check({force: true}).should('be.checked')
        confirmPage.getSubmitButton().click()
        confirmPage.getOrderAlert().then(function(element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})