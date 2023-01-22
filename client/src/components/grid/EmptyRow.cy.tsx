import {EmptyRow} from "./EmptyRow";
import {SOLUTION_LENGTH} from "../../constants/settings";

describe('<EmptyRow />', () => {
    it('should contains 5 cells', () => {
        cy.mount(<EmptyRow/>)
        cy.get('[data-cy="cell"]').should('have.length', SOLUTION_LENGTH)
    })
    it('should display cells with the no value  and correspondingly style', () => {
        cy.mount(<EmptyRow/>)
        cy.get("[data-cy='empty-row']")
            .within(() => {
                cy.get("[data-cy='cell']").eq(0).should('exist').should('have.text', '').should('have.css', 'background-color', 'rgb(255, 255, 255)');
                cy.get("[data-cy='cell']").eq(1).should('exist').should('have.text', '').should('have.css', 'background-color', 'rgb(255, 255, 255)');
                cy.get("[data-cy='cell']").eq(2).should('exist').should('have.text', '').should('have.css', 'background-color', 'rgb(255, 255, 255)');
                cy.get("[data-cy='cell']").eq(3).should('exist').should('have.text', '').should('have.css', 'background-color', 'rgb(255, 255, 255)');
                cy.get("[data-cy='cell']").eq(4).should('exist').should('have.text', '').should('have.css', 'background-color', 'rgb(255, 255, 255)');
            })
    })
})