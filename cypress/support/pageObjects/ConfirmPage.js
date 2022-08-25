

export class ConfirmPage {

    getCountryBox() {
        return cy.get("#country")
    }
    getAgreeChechbox() {
        return cy.get('#checkbox2')
    }
    getSubmitButton() {
        return cy.get("input[type='submit']")
    }
    getOrderAlert() {
        return cy.get('.alert')
    }

}
