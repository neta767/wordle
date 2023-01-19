import React from 'react'
import {Alert} from './Alert'

describe('<Alert />', () => {
    it('renders', () => {
        cy.mount(<Alert isOpen={true} message='test'/>)
        cy.get('p').should('exist').contains('test')
    })

    it('renders', () => {
        cy.mount(<Alert isOpen={false} message='test'/>)
        cy.get('p').should('not.exist')
    })
})