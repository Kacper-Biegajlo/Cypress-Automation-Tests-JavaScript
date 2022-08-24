/// <reference types="Cypress" />

describe('My 6th Test Suite', () => {
    it("Rahul shetty academy", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        // Mouse hover Elements
        cy.get("div.mouse-hover-content").invoke('show') // remember to use invoke on direct parent of hidden elements
        cy.contains('Top').click()
        cy.url().should('include', 'top')

        // cypress force click method to click on hidden elements
        cy.contains('Reload').click({force: true})
        cy.url().should('not.include', 'top')

    })
})