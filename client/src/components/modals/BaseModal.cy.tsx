import React from 'react'
import {BaseModal} from './BaseModal'

describe('<BaseModal />', () => {
    it('should be open', () => {
        cy.mount(<BaseModal children={<></>} handleClose={() => {
        }} title='' isOpen={true}/>)
        cy.get("[data-cy='base-modal']").should('exist')
    })

    it('should be closed', () => {
        cy.mount(<BaseModal children={<></>} handleClose={() => {
        }} title='' isOpen={false}/>)
        cy.get("[data-cy='base-modal']").should('not.exist')
    })

    it('should contains title', () => {
        cy.mount(<BaseModal children={<></>} handleClose={() => {
        }} title='test' isOpen={true}/>)
        cy.get("[data-cy='base-modal-body']").contains('test')
    })

    it('should call onClose when button clicked', () => {
        const handleClose = cy.spy().as('onClose');
        cy.mount(<BaseModal children={<></>} handleClose={handleClose} title='' isOpen={true}/>)
        cy.get("[data-cy='close-button']").click()
        cy.get('@onClose').should('be.called')
    })
})