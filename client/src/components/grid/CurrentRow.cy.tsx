import React from 'react'
import {CurrentRow} from './CurrentRow'
import {SOLUTION_LENGTH} from "../../constants/settings";

describe('<CurrentRow />', () => {
    it('renders', () => {
        cy.mount(<CurrentRow guess='TEST'/>)
        cy.get("[data-cy='cell']").should('have.length', SOLUTION_LENGTH)
    })
    it('renders', () => {
        cy.mount(<CurrentRow guess='TEST'/>)
        cy.get("[data-cy='current-row']")
            .within(() => {
                cy.get("[data-cy='cell']").eq(0).contains('T')
                cy.get("[data-cy='cell']").eq(1).contains('E')
                cy.get("[data-cy='cell']").eq(2).contains('S')
                cy.get("[data-cy='cell']").eq(3).contains('T')
                cy.get("[data-cy='cell']").eq(4).should('exist')
            })
    })

})