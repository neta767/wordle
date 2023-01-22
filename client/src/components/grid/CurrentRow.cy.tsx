import React from 'react'
import {CurrentRow} from './CurrentRow'
import {SOLUTION_LENGTH} from "../../constants/settings";

describe('<CurrentRow />', () => {
    it('should contains 5 cells', () => {
        cy.mount(<CurrentRow guess='TEST'/>)
        cy.get("[data-cy='cell']").should('have.length', SOLUTION_LENGTH)
    })
    it('should display cells with the correct value and correspondingly style', () => {
        cy.mount(<CurrentRow guess='TEST'/>)
        cy.get("[data-cy='current-row']")
            .within(() => {
                cy.get("[data-cy='cell']").eq(0).should('exist').should('have.css', 'background-color', 'rgb(255, 255, 255)').contains('T')
                cy.get("[data-cy='cell']").eq(1).should('exist').should('have.css', 'background-color', 'rgb(255, 255, 255)').contains('E')
                cy.get("[data-cy='cell']").eq(2).should('exist').should('have.css', 'background-color', 'rgb(255, 255, 255)').contains('S')
                cy.get("[data-cy='cell']").eq(3).should('exist').should('have.css', 'background-color', 'rgb(255, 255, 255)').contains('T')
                cy.get("[data-cy='cell']").eq(4).should('exist').should('have.css', 'background-color', 'rgb(255, 255, 255)').should('have.text', '');
            })
    })
})