const link = 'https://photo.phuket.run/'
const firstName = 'Siwagorn'
const lastname = 'Naknaen'
const email = 'apsiwagorn@gmail.com'
const password = '1234'

describe('Register', () => {
    it('Go to url', () => {
       cy.visit(link)
    })
    it('go to login/registration', () => {
        cy.get('[class="ant-btn styles__BlueBorderButton-sc-120t2zy-2 dRkZcK ant-btn-primary"]')
          .click()
     })
     it('go to registration', () => {
        cy.get('[aria-selected="false"]')
          .click()
     })
     it('registration', () => {
        cy.get('input[id="profile.firstName"]').type(firstName)
        cy.get('input[id="profile.lastName"]').type(lastname)
        cy.get('#form-signup #email').type(email)
        cy.get('#form-signup #password').type(password)

     })
     it('confirm', () => {
      cy.get('[class="ant-btn ant-btn-primary"]')
        .click()
   })


  })