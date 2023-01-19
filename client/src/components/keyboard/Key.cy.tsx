import React from 'react'
import {Key} from './Key'

describe('<Key />', () => {
    it('renders', () => {
        cy.mount(<Key value='T' onClick={() => {
        }}/>)
        cy.get('button').should('exist').contains('T')
    })
    it('renders', () => {
        cy.mount(<Key value='T' onClick={() => {
        }}/>)
        cy.get('button').should('exist').contains('T')
    })

    it('should raise data', () => {
        const handleClick = cy.spy().as('onClick');
        cy.mount(<Key value='T' onClick={handleClick}/>);
        cy.get('button').click();
        cy.get('@onClick').should('have.been.calledWith', ('T'));
    });

    it('should raise data', () => {
        const handleClick = cy.spy().as('onClick');
        cy.mount(<Key value='T' onClick={handleClick}/>);
        cy.get('button').click();
        cy.get('@onClick').should('have.been.calledWith', ('T'));
    });
})