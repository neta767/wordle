import React from 'react'
import {LoginModal} from './LoginModal'

describe('<LoginModal />', () => {
    it('should be open', () => {
        cy.mount(<LoginModal handleLogin={() => {
        }} handleClose={() => {
        }} isOpen={true}/>)
        cy.get("form").should('exist')
    })

    it('should be closed', () => {
        cy.mount(<LoginModal handleLogin={() => {
        }} handleClose={() => {
        }} isOpen={false}/>)
        cy.get("form").should('not.exist')
    })

    it('should display with test input and submit input', () => {
        cy.mount(<LoginModal handleLogin={() => {
        }} handleClose={() => {
        }} isOpen={true}/>);
        cy.get('input[type="text"]').should('have.length', 1);
        cy.get('input[type="submit"]').should('have.length', 1);
    })

    it('should submits a form with the data', () => {
        cy.mount(<LoginModal handleLogin={cy.stub().as('submit')} handleClose={() => {
        }} isOpen={true}/>)
        cy.get("[data-cy='name']").type('test')
        cy.get('form').submit()
        cy.get('@submit').should('have.been.calledWith', 'test')
    })
})