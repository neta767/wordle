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

    it('should submits a form with the data', () => {
        cy.mount(<LoginModal handleLogin={cy.stub().as('submit')} handleClose={() => {
        }} isOpen={true}/>)
        cy.get("[data-cy='name']").type('test')
        cy.get('form').submit()
        cy.get('@submit').should('have.been.calledWith', 'test')
    })
})