import React from 'react'
import HomePage from './HomePage'
import {BrowserRouter as Router} from 'react-router-dom'

describe('<HomePage />', () => {
    it('renders', () => {
        cy.mount(
            <Router>
                <HomePage userName={null}/>
            </Router>
        )
        cy.contains('Start to play')
        // .click().location('pathname').should('equal', '/game')
    })

    it('should contain default greeting message and button', () => {
        cy.mount(
            <Router>
                <HomePage userName={null}/>
            </Router>
        )
        cy.get('form').should('exist').within(() => {
            cy.get('p').should('have.text', 'Welcome guest!').should('exist')
            cy.get('button').should('have.text', 'Start to play').should('exist')
        })
    })

    it('should contain personal greeting message', () => {
        cy.mount(
            <Router>
                <HomePage userName='test'/>
            </Router>
        )
        cy.get('p').should('have.text', 'Welcome test!').should('exist')
    })
})