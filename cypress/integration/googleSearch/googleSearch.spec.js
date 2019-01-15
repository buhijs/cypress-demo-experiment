/// <reference types="Cypress" />

describe('Check google url address', function() {
    context('Google location', () => {
        beforeEach(() => {
            cy.visit('https://www.google.com/')
        })

        it('Get the current google URL hash', () => {
            cy.hash().should('be.empty')
        })

        it('Get window.location', () => {
            cy.location().should((location) => {
                expect(location.hash).to.be.empty
                expect(location.host).to.eq('www.google.com')
                expect(location.hostname).to.eq('www.google.com')
                expect(location.port).to.eq('')
                expect(location.protocol).to.eq('https:')
                expect(location.search).to.be.empty
            })
        })
        
        it('Get the current URL', () => {
            cy.url().should('eq', 'https://www.google.com/')
        })

        it('make an XHR request', () => {
            cy.request('https://www.google.com/')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            })
        })
    })

})