const link = 'https://photo.phuket.run/'
const email = 'apsiwagorn@gmail.com'
const password = '1234'


describe('login', () => {
     it('Go to url', () => {
        cy.visit(link)
     })
     it('go to login/registration', () => {
        cy.get('[class="ant-btn styles__BlueBorderButton-sc-120t2zy-2 dRkZcK ant-btn-primary"]')
        .click()
    })
     it('success login', () => {
        cy.get('input[id="email"]').type(email)
        cy.get('input[id="password"]').type(password)
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
    })


})