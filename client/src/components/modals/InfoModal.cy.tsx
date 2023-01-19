import React from 'react'
import {InfoModal} from './InfoModal'

describe('<InfoModal />', () => {
    it('should be open', () => {
        cy.mount(<InfoModal isOpen={true} handleClose={() => {
        }}/>)
        cy.get("[data-cy='base-modal']").should('exist')
    })

    it('should be closed', () => {
        cy.mount(<InfoModal isOpen={false} handleClose={() => {
        }}/>)
        cy.get("[data-cy='base-modal']").should('not.exist')
    })
})