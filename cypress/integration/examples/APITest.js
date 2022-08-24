describe('My API Test Suite', () => {
    it("API  test", () => {

        cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
            
            "name":"Learn Copium Automation with Kacper",
            "isbn":"iqkweiiap1",
            "aisle":"697230asd",
            "author":"BlueCodeMaster3000"
            }).then(function(response) {
                expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.equal(200)
            })
    })
})
