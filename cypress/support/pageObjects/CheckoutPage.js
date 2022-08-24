class CheckoutPage {

    getRemoveButton() {
        return cy.get("button[class='btn btn-danger']")
    }
    getTotalAmmountText() {
        return cy.get("h3 strong")
    }
    getContinueShoppingButton() {
        return cy.contains("Continue Shopping")
    }
    getCheckoutButton() {
        return cy.contains("Checkout")
    }

}

export default CheckoutPage
