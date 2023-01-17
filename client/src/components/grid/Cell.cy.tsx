import React from 'react'
import {Cell} from './Cell'

describe('<Cell />', () => {
    it('renders', () => {
        cy.mount(<Cell value='test'/>)
        // cy.get('[data-cy="try"]').contain()
        cy.get('div')
    })
})