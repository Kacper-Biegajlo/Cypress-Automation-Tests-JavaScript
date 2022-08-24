class ShopPage {

    getCheckoutButton() {
        return cy.get("a.nav-link.btn.btn-primary")
    }
}

export default ShopPage
