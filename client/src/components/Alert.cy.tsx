import React from 'react'
import {Alert} from './Alert'
import {Key} from "./keyboard/Key";

describe('<Alert />', () => {
    it('should be open', () => {
        cy.mount(<Alert isOpen={true} message='' variant={undefined}/>)
        cy.get('p').should('exist')
    })

    it('should be closed', () => {
        cy.mount(<Alert isOpen={false} message='' variant={undefined}/>)
        cy.get('p').should('not.exist')
    })
    it('should contains message', () => {
        cy.mount(<Alert isOpen={true} message='test' variant={undefined}/>)
        cy.get('p').should('exist').contains('test')
    })

    it('should have error style', () => {
        cy.mount(<Alert isOpen={true} message='' variant='error'/>)
        cy.get("[data-cy='alert']").should('exist').should('have.css', 'background-color', 'rgb(244, 63, 94)')
    })

    it('should have success style', () => {
        cy.mount(<Alert isOpen={true} message='' variant='success'/>)
        cy.get("[data-cy='alert']").should('exist').should('have.css', 'background-color', 'rgb(59, 130, 246)')
    })
})