import {Grid} from './Grid'
import {MAX_CHALLENGES} from "../../constants/settings";

describe('<Grid />', () => {
    it('should contains 6 rows', () => {
        cy.mount(<Grid currentGuess='' guesses={[]} guessesStatuses={[]}/>)
        cy.get('[data-cy$=-row]').should('have.length', MAX_CHALLENGES)
    })

    it('should contains 1 current-row and 5 empty-row', () => {
        cy.mount(<Grid currentGuess='TEST' guesses={[]} guessesStatuses={[]}/>)
        cy.get('[data-cy=current-row]').should('have.length', 1)
        cy.get('[data-cy=empty-row]').should('have.length', 5)
    })

    it('should contains 2 completed-row, 1 current-row and 3 empty-row', () => {
        cy.mount(<Grid currentGuess='' guesses={['DANCE', 'WATCH']} guessesStatuses={[[], []]}/>)
        cy.get('[data-cy=completed-row]').should('have.length', 2)
        cy.get('[data-cy=current-row]').should('have.length', 1)
        cy.get('[data-cy=empty-row]').should('have.length', 3)
    })
})