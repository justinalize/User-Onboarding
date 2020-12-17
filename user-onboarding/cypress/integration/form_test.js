// write tests here
describe('Quotes App', ()=> {
    // schedule something to happen for each test
    // before each test we navigate to the site
    // EACH TEST NEEDS FRESH STATE

    beforeEach(()=> {
        cy.visit('http://localhost:3000/')
    })

    // HELPERS TO AVOID REPITITION
    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passInput = () => cy.get('input[name="password"]')
    const termsInput = () => cy.get('input[name="terms"]')
    const submitButton = () => cy.get('#submitBtn')
    // use it for test
  
   
    it('can type inside inputs', () => {
        nameInput()
        .should('have.value', '')
        .type('justin')
        .should('have.value', 'justin')

        emailInput()
        .should('have.value', '')
        .type('justin@test.com')
        .should('have.value', 'justin@test.com')

        passInput()
        .should('have.value', '')
        .type('password')
        .should('have.value', 'password')
    })
    describe('testing if things work when pressed', () => {
        it('seeing if we can click checkbox', () => {
            termsInput().should('not.be.checked')
            termsInput().click()
            termsInput().should('be.checked')
        })
        it('can submit', () => {
            submitButton().should('be.disabled')
            nameInput().type('justin')
            emailInput().type('justin@test.com')
            passInput() .type('password')
            termsInput().click()
            submitButton().should('not.be.disabled')
            submitButton().click()
            nameInput().should('have.value', '')
            emailInput().should('have.value', '')
            passInput().should('have.value', '')
            // HAD TO TURN OFF PREVENR DEFAULT AS IT GAVE AN ERROR
        })
        it('should not submit if a section is missing', () => {
            submitButton().should('be.disabled')
            nameInput().type('justin')
            emailInput().type('justin@test.com')
            termsInput().click()
            submitButton().should('be.disabled')


        })
    })
})