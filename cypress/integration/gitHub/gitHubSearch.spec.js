  /// <reference types="Cypress" />

describe('GitHub search for repository', function() {
    context('GitHub Search', () => {
        before(() => {
            cy.visit('www.github.com')
        })
 
        it('Should get the current URL hash', () => {
            cy.hash().should('be.empty')
        })

        it('Should get the current URL', () => {
            cy.url().should('eq', 'www.github.com')
        }) 

         it('Expect to make an XHR request', () => {
            cy.request('www.github.com')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            })
        })  

        it('Should contains html,head and body', () => {
            cy.visit('www.github.com')
            cy.contains('html')
            cy.contains('head')
           cy.contains('body')
            cy.wait(1000)
        })
         it('Should contain search field', () => {
            cy.get('.header-search-input').should('be.visible')
            cy.wait(1000)
        }) 

        it('Should input cypress-demo-experimen into search input field',() => {
            cy.get('.header-search-input').type('cypress-demo-experimen')
            cy.wait(1000)
        })
        it('Should find cypress-demo-experimen repository and click on it',() => {
            cy.get('a.v-align-middle')
                .should('be.visible')
                .and('have.attr', 'href')
                .and('include', 'buhijs/cypress-demo-experiment')
                .click()
            cy.wait(1000)
        })
        it('Should check search result and go to cypress page',() => {
            cy.contains('body')
            cy.contains('.public')
            
            cy.get('.public').should('have.value', 'buhijs/cypress-demo-experiment')
            cy.get('.text-gray-dark').should('have.text', 'Trying Cypress')
        })
    })
})  