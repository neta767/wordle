import {CompletedRow} from './CompletedRow'
import {SOLUTION_LENGTH} from "../../constants/settings";

describe('<CompletedRow />', () => {
    it('should contains 5 cells', () => {
        cy.mount(<CompletedRow guess='DANCE' guessStatuses={[]}/>)
        cy.get("[data-cy='cell']").should('have.length', SOLUTION_LENGTH)
    })
    it('should display cells with the correct value and correspondingly style', () => {
        cy.mount(<CompletedRow guess='DANCE' guessStatuses={['absent', 'correct', 'present', 'absent', 'absent']}/>)
        cy.get("[data-cy='completed-row']")
            .within(() => {
                cy.get("[data-cy='cell']").eq(0).should('exist').should('have.css', 'background-color', 'rgb(148, 163, 184)').contains('D')
                cy.get("[data-cy='cell']").eq(1).should('exist').should('have.css', 'background-color', 'rgb(34, 197, 94)').contains('A')
                cy.get("[data-cy='cell']").eq(2).should('exist').should('have.css', 'background-color', 'rgb(234, 179, 8)').contains('N')
                cy.get("[data-cy='cell']").eq(3).should('exist').should('have.css', 'background-color', 'rgb(148, 163, 184)').contains('C')
                cy.get("[data-cy='cell']").eq(4).should('exist').should('have.css', 'background-color', 'rgb(148, 163, 184)').contains('E')
            })
    })
})