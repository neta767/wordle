import React from 'react'
import {AlertProvider} from './AlertContext'

describe('<AlertProvider />', () => {
    it('renders', () => {
        cy.mount(<AlertProvider/>)
    })
})