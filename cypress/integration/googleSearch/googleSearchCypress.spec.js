/// <reference types="Cypress" />

describe('Google search Cypress.io', function() {
    context('Google Search', () => {
        before(() => {
            cy.visit('https://www.google.com/')
        })

        it('Page should contains html,head andbody', () => {
            cy.contains('html')
            cy.contains('head')
            cy.contains('body')
        })
        it('Page should contains google image', () => {
            cy.get('div[id=lga]').find('img').should('be.visible')
        })
        it('Page should contains  2 search buttons', () => {
            // Search btn - 1
            cy.get('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(1)')
            .should('be.visible')
            .should('have.value','Google meklēšana')
            // Search btn - 2
            cy.get('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(2)')
            .should('be.visible')
            .should('have.value','Es ticu veiksmei!')

            cy.wait(1000)
        })
        it('Should input Cypress.io into input field and click on cypress.io',() => {
            cy.get('.gLFyf').type('Cypress.io')
            cy.wait(1000)
            cy.get('li.sbct:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > b:nth-child(1)').click()
            cy.wait(1000)
        })
        it('Should check search result and go to cypress page',() => {
            cy.contains('body')
            cy.get('.gLFyf').should('have.value', 'cypress.io')
            cy.get('#rso > div:nth-child(1) > div > div > div > div > div.r > a:nth-child(1) > h3')
            .should('have.text', 'Cypress.io: JavaScript End to End Testing Framework')
            //cy.get('#rso > div:nth-child(1) > div > div > div > div > div.r > a:nth-child(1) > h3').click()
        })
        //it('Check cypress.io page', () => {
            // cypress do not allow superdomain change !

            //cy.get('#rso > div:nth-child(1) > div > div > div > div > div.r > a:nth-child(1) > h3').click()
            //cy.location(cy.url(),{timeout: 60000})
            //cy.wait(1000)
            //cy.url().should('eq', 'https://www.cypress.io/')
        //})
    })
})