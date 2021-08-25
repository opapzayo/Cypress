const link = 'https://photo.phuket.run/'
const email = 'apsiwagorn@gmail.com'
const wrongpass = '12345'


describe('Eror login', () => {
    it('Go to url', () => {
       cy.visit(link)
    })
    it('go to login/registration', () => {
        cy.get('[class="ant-btn styles__BlueBorderButton-sc-120t2zy-2 dRkZcK ant-btn-primary"]')
        .click()
    })
    it('wrong login', () => {
        cy.get('input[id="email"]').type(email)
        cy.get('input[id="password"]').type(wrongpass)
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        cy.get('.ant-modal-confirm-btns > .ant-btn').click()
     })

})