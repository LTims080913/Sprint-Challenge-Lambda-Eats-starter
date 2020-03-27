describe("Testing Pizza Form App", function() {
    beforeEach(function() {
        cy.visit("http://localhost:3000/")
    });
    it("Add tests to the selections and input and submit form", function() {
        cy.get('.order')
        .click()

        cy.get('#name')
        .type("Latosha")
        .should("have.value", "Latosha")

        cy.get('#size')
        .select("party")
        .should("have.value", "party")

        cy.get('input[name="garlic"]')
        .click()

        cy.get('input[name="sausage"]')
        .click()

        cy.get('input[name="black"]')
        .click()

        cy.get('input[name="roasted"]')
        .click()
        
        cy.get('form > button')
        .click()
    })
        

        

})