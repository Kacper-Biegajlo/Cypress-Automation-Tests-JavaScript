/// <reference types="Cypress" />

describe('My 3rd Test Suite', () => {
    it("Rahul shetty academy", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        

        // Checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        // .check() is used for checkboxes
        // be. is used for checking behavior of element for example if box is checkd
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get("input[type='checkbox']").check(['option2', 'option3'])
        // checking multiple checkboxes using an array

        // Static Dropdown
        cy.get('select').select('Option2').should('have.value', 'option2')

        // Dynamic Dropdown
        cy.get('#autocomplete').type('Pol')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==='Poland')
            {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Poland')

        // Visible and invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Radio buttons
        cy.get("[value='radio2']").check().should('be.checked')
    })
})