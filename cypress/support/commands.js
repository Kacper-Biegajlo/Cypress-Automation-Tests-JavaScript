// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})
Cypress.Commands.add('selectCountry', (countryName) => {
    cy.get(".suggestions > ul > li > a").each(($el, index, $list) => {
        if($el.text()===(countryName))
        {
            cy.contains(countryName).click()
        }
    })
})

Cypress.Commands.add('CompareTotals', (sum) => {
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const actualText = $el.text()
        var res = actualText.split(" ")
        var res = res[1].trim()
        sum = Number(sum)+Number(res)
    }).then(function() {
        cy.get("h3 strong").then(function(element) {
            const actualText = element.text()
            var res = actualText.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
    })
})

Cypress.Commands.add('ConfirmEmptyCart', () => {
    cy.get("h3 strong").then(function(element) {
        const actualText = element.text()
        var res = actualText.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(0)
    })
})

Cypress.Commands.add('LoginAPI', () => {

    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",
    {"userEmail":"Hell!@gmail.com","userPassword":"1337Hell"}).then(function(response) {

        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })