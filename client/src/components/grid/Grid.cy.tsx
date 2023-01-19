import React from 'react'
import {Grid} from './Grid'
import {MAX_CHALLENGES} from "../../constants/settings";

describe('<Grid />', () => {
    it('renders', () => {
        cy.mount(<Grid currentGuess='' guesses={[]} guessesStatuses={[]}/>)
        cy.get('[data-cy$=-row]').should('have.length', MAX_CHALLENGES)
    })
})