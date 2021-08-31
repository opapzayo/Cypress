const link = 'https://photo.phuket.run/'
const email = 'apsiwagorn@gmail.com'
const password = '1234'
const number = '0123456789'

describe('Buy picture', () => {

    it('Go to url', () => {
       cy.visit(link)
    })
    it('goto event', () => {
        cy.get(':nth-child(2) > a > .eventCard > .coverBox > .eventCardImage')
          .click()
    })
    it('up load', () => { 
       const img = 'pic.jpg';
       cy.get('input[type="file"]').attachFile(img)
    })
    it('choose a picture', () => { 
      cy.get('img[alt="G0B_2993.jpg"]').click()
      cy.get('.ant-col-lg-12 > div > .ant-btn').click()
      cy.get('.ant-dropdown-menu > :nth-child(2)').click()
    })
    it('cart', () => { 
      cy.get('.ant-btn > .svg-inline--fa').click()
      cy.get('.ant-checkbox-wrapper > :nth-child(2) > span').click()
      cy.get('.ant-modal-footer > .ant-btn-primary').click()
   })
   it('login', () => {
      cy.get('input[id="email"]').type(email)
      cy.get('input[id="password"]').type(password)
      cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
      cy.get('.ant-modal-footer > [ant-click-animating-without-extra-node="false"]').click()
  })
  it('payment', () => { 
   cy.get('.styles__OmiseTrueContainer-sc-120t2zy-51 > .ant-btn').click()
   cy.get('input[id="mobileNumber"]').type(number)
   cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
   })
    

})
    