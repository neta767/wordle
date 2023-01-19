import React from 'react'
import {CompletedRow} from './CompletedRow'
import {SOLUTION_LENGTH} from "../../constants/settings";

describe('<CompletedRow />', () => {
    it('renders', () => {
        cy.mount(<CompletedRow guess='DANCE' guessStatuses={[]}/>)
        cy.get("[data-cy='cell']").should('have.length', SOLUTION_LENGTH)
    })
    it('renders', () => {
        cy.mount(<CompletedRow guess='DANCE' guessStatuses={[]}/>)
        cy.get("[data-cy='completed-row']")
            .within(() => {
                cy.get("[data-cy='cell']").eq(0).contains('D')
                cy.get("[data-cy='cell']").eq(1).contains('A')
                cy.get("[data-cy='cell']").eq(2).contains('N')
                cy.get("[data-cy='cell']").eq(3).contains('C')
                cy.get("[data-cy='cell']").eq(4).contains('E')
            })
    })
})