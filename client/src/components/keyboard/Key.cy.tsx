import React from 'react'
import {Key} from './Key'

describe('<Key />', () => {
    it('should contains correct value', () => {
        cy.mount(<Key value='T' onClick={() => {
        }}/>)
        cy.get('button').should('exist').contains('T')
    })

    it('should send value when clicked', () => {
        const handleClick = cy.spy().as('onClick');
        cy.mount(<Key value='T' onClick={handleClick}/>);
        cy.get('button').click();
        cy.get('@onClick').should('have.been.calledWith', ('T'));
    });

    it('should have width as given', () => {
        cy.mount(<Key value='T' onClick={() => {
        }} width={50}/>)
        cy.get('button').should('have.css', 'width', '50px')
    })

    it('should have key style', () => {
        cy.mount(<Key value='T' onClick={() => {
        }}/>)
        cy.get('button').should('have.css', 'background-color', 'rgb(226, 232, 240)')
    })

    it('should have absent key style', () => {
        cy.mount(<Key value='T' onClick={() => {
        }} status='absent'/>)
        cy.get('button').should('have.css', 'background-color', 'rgb(148, 163, 184)')
    })

    it('should have present key style', () => {
        cy.mount(<Key value='T' onClick={() => {
        }} status='present'/>)
        cy.get('button').should('have.css', 'background-color', 'rgb(234, 179, 8)')
    })

    it('should have correct key style', () => {
        cy.mount(<Key value='T' onClick={() => {
        }} status='correct'/>)
        cy.get('button').should('have.css', 'background-color', 'rgb(34, 197, 94)')
    })
})