/// <reference types="Cypress" />

describe('My 4th Test Suite', () => {
    it("Rahul shetty academy", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Popups and Alerts
        cy.get('#alertbtn').click()
        cy.get("[value='Confirm']").click()

        // Cypress Events - not Cyprus events!
        cy.on('window:alert', (str) => {
            
            // Mocha used to compare 2 strings
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            
            // Mocha used to compare 2 strings
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // Child Tabs/Windows - removin attribute
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        // you invoke jQuerry function to remove target attribute so that tab/window 
        //  does not open new tab/window

        // Browser Navigation
        cy.url().should('not.include', 'AutomationPractice')
        cy.go('back')
        cy.url().should('include', 'AutomationPractice')

        // Child Tabs/Window - grabbing attribute
        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.visit(url)
        })
        cy.url().should('not.include', 'AutomationPractice')
    })
})