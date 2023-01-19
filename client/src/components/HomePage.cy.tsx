import React from 'react'
import HomePage from './HomePage'

describe('<HomePage />', () => {
    it('renders', () => {
        cy.mount(<HomePage userName='test'/>)
    })
})