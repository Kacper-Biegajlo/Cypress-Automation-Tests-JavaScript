/// <reference types="Cypress" />

describe('My 5th Test Suite', () => {
    it("Rahul shetty academy", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Web Tables
        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

            const courseName = $el.text()
            if(courseName.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')

                })
            }
        })

    })
})