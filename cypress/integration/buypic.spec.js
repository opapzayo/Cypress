const link = 'https://photo.phuket.run/'

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
       cy.get('.ant-upload > .ant-btn').attachFile(img)
    })

    })
    