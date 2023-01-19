import {EmptyRow} from "./EmptyRow";
import {SOLUTION_LENGTH} from "../../constants/settings";

describe('<EmptyRow />', () => {
    it('renders', () => {
        cy.mount(<EmptyRow/>)
        cy.get('[data-cy="cell"]').should('have.length', SOLUTION_LENGTH)
    })
})