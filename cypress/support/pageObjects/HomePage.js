export class HomePage {

    getNameBox() {
        return cy.get("form input.form-control[name='name']")
    }
    get2WayDataBindingBox() {
        return cy.get("form input.form-control[name='name']")
    }
    getGenderDrop() {
        return cy.get("select")
    }
    getEntrepreneurButton() {
        return cy.get('#inlineRadio3')
    }
    getShopButton() {
        return cy.contains("Shop")
    }

}
