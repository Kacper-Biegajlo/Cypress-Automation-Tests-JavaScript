import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {HomePage} from '../../../../support/pageObjects/HomePage'
import {ShopPage} from '../../../../support/pageObjects/shopPage'
import {CheckoutPage} from '../../../../support/pageObjects/CheckoutPage'
import {ConfirmPage} from '../../../../support/pageObjects/ConfirmPage'

const homePage = new HomePage()
const shopPage = new ShopPage()
const checkoutPage = new CheckoutPage()
const confirmPage = new ConfirmPage()
let name 

Given('I open Ecommerce page',  () => {
    
    cy.visit(Cypress.env("url")+"/angularpractice/")
})

When('I add items to cart', function() {

    homePage.getShopButton().click()

    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)
    })
    shopPage.getCheckoutButton().click()
})

And('Validate total prices', () => {

    var sum = 0
    cy.CompareTotals(sum)
    checkoutPage.getCheckoutButton().click()
})

Then('Select the country, submit and verify outcome message', function() {

    confirmPage.getCountryBox().type("P")
    Cypress.config('defaultCommandTimeout', 8000) 
    cy.selectCountry(this.data.countryName)
    confirmPage.getCountryBox().should("have.value", this.data.countryName)
    confirmPage.getAgreeChechbox().check({force: true}).should('be.checked')
    confirmPage.getSubmitButton().click()
    confirmPage.getOrderAlert().then(function(element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
        })
})

When('I fill the form details', function(dataTable) {

    name = dataTable.rawTable[1][0]
    homePage.getNameBox().type(dataTable.rawTable[1][0])
    homePage.getGenderDrop().select(dataTable.rawTable[1][1])
})

Then('Validate the forms behaviour', function() {

    homePage.get2WayDataBindingBox().should('have.value', name)
    homePage.getNameBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneurButton().should("be.disabled")
})

And('Select the Shop page', () => {

    homePage.getShopButton().click()
})