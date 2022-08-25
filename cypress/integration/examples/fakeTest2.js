/// <reference types="Cypress" />

describe('My Mock HTTP Request Test Suite', () => {
    it("HTTP Request test", () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
        (req) => {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=John foe" // 404 error since there is no author like that anymore but works with John foe 200 so security issue Pog
        req.continue((res) => {

            expect(res.statusCode).to.equal(200)
            })
        }).as('dummyURL')
        cy.get(".btn.btn-primary").click()
        cy.wait("@dummyURL")

    })
})