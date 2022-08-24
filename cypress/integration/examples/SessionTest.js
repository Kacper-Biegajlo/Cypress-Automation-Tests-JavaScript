/// <reference types="Cypress" />

import { And } from "@badeball/cypress-cucumber-preprocessor"

describe('JWT Session', () => {
    it("is logged in through local storage", () => {

        cy.LoginAPI().then(function() {

            cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains('Checkout').click()
        cy.get("[placeholder*='Country']").type("ind")
        cy.get(".ta-results button").each(($el,index,$list) => { 
            const actualText = $el.text()
            if(actualText.trim() === "India") {
                cy.wrap($el).click()
            }

        // Sadly due to the app issues rest of the code wont work untill its fixed
        // cy.get('.btnn').click()
        // cy.wait(2000)
        // cy.get(".order-summary button").click()
        })
    })
})